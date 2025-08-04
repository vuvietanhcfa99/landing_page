import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Star, Send, X } from 'lucide-react';

interface WriteReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WriteReviewModal({ isOpen, onClose }: WriteReviewModalProps) {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviewerName, setReviewerName] = useState('');
  const [reviewContent, setReviewContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!reviewerName.trim() || !reviewContent.trim() || rating === 0) {
      alert('Please fill in all fields and provide a rating.');
      return;
    }

    // Handle review submission
    console.log('Review submitted:', {
      name: reviewerName,
      content: reviewContent,
      rating: rating
    });

    // Reset form
    setRating(0);
    setHoverRating(0);
    setReviewerName('');
    setReviewContent('');
    
    // Close modal
    onClose();
    
    // Show success message
    alert('Thank you for your review! It will be reviewed and published soon.');
  };

  const handleRatingClick = (starRating: number) => {
    setRating(starRating);
  };

  const handleRatingHover = (starRating: number) => {
    setHoverRating(starRating);
  };

  const handleRatingLeave = () => {
    setHoverRating(0);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md mx-4 rounded-lg">
        <DialogHeader className="text-left">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl">Write a Review</DialogTitle>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={onClose}
              className="h-8 w-8"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
          <p className="text-muted-foreground text-sm">
            Share your experience with CFA99 services
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Rating Section */}
          <div className="space-y-3">
            <Label>Rating</Label>
            <div className="flex items-center space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => handleRatingClick(star)}
                  onMouseEnter={() => handleRatingHover(star)}
                  onMouseLeave={handleRatingLeave}
                  className="transition-all duration-150 hover:scale-110"
                >
                  <Star
                    className={`w-8 h-8 ${
                      star <= (hoverRating || rating)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                </button>
              ))}
            </div>
            {rating > 0 && (
              <p className="text-sm text-muted-foreground">
                You rated: {rating} star{rating !== 1 ? 's' : ''}
              </p>
            )}
          </div>

          {/* Name Input */}
          <div className="space-y-2">
            <Label htmlFor="reviewer-name">Your Name</Label>
            <Input
              id="reviewer-name"
              placeholder="Enter your name"
              value={reviewerName}
              onChange={(e) => setReviewerName(e.target.value)}
              required
            />
          </div>

          {/* Review Content */}
          <div className="space-y-2">
            <Label htmlFor="review-content">Your Review</Label>
            <Textarea
              id="review-content"
              placeholder="Tell us about your experience with CFA99..."
              value={reviewContent}
              onChange={(e) => setReviewContent(e.target.value)}
              rows={4}
              required
              className="resize-none"
            />
            <p className="text-xs text-muted-foreground">
              {reviewContent.length}/500 characters
            </p>
          </div>

          {/* Submit Button */}
          <div className="flex space-x-3 pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              className="flex-1 flex items-center justify-center"
            >
              <Send className="w-4 h-4 mr-2" />
              Submit Review
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}