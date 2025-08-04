import { Avatar, AvatarFallback } from './ui/avatar';
import { Clock, MessageCircle, ThumbsUp, MoreHorizontal } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';

interface CommentCardProps {
  commenterName: string;
  time: string;
  commentContent: string;
  responseContent: string;
}

export default function CommentCard({
  commenterName,
  time,
  commentContent,
  responseContent,
}: CommentCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(Math.floor(Math.random() * 15) + 2);

  // Get initials from name
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((part) => part[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  return (
    <div className="bg-card border border-border rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-200 animate-fade-in">
      {/* Customer Comment */}
      <div className="mb-5">
        {/* User Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <Avatar className="w-12 h-12 border-2 border-primary/10">
              <AvatarFallback className="bg-gradient-to-br from-cfa99-yellow to-cfa99-yellow-light text-white text-sm font-medium">
                {getInitials(commenterName)}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h4 className="text-base font-medium text-foreground">{commenterName}</h4>
              <div className="flex items-center text-muted-foreground text-sm">
                <Clock className="w-3 h-3 mr-1" />
                {time}
              </div>
            </div>
          </div>
          
          <Button variant="ghost" size="icon" className="w-8 h-8 text-muted-foreground hover:text-foreground">
            <MoreHorizontal className="w-4 h-4" />
          </Button>
        </div>

        {/* Comment Content */}
        <p className="text-foreground leading-relaxed mb-4 text-base">{commentContent}</p>

        {/* Interaction Buttons */}
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleLike}
            className={`flex items-center space-x-2 transition-colors ${
              isLiked 
                ? 'text-cfa99-yellow hover:text-cfa99-yellow-dark' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <ThumbsUp className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
            <span className="text-sm">{likeCount}</span>
          </Button>
          
          <Button variant="ghost" size="sm" className="flex items-center space-x-2 text-muted-foreground hover:text-foreground">
            <MessageCircle className="w-4 h-4" />
            <span className="text-sm">Reply</span>
          </Button>
        </div>
      </div>

      {/* CFA99 Response */}
      <div className="bg-response-bg rounded-xl p-4 border-l-4 border-l-cfa99-yellow relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-16 h-16 bg-cfa99-yellow/5 rounded-full -translate-y-8 translate-x-8"></div>
        
        <div className="relative z-10">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-8 h-8 bg-gradient-to-br from-cfa99-yellow to-cfa99-yellow-light rounded-full flex items-center justify-center shadow-sm">
              <span className="text-white text-xs font-semibold">C</span>
            </div>
            <div>
              <span className="text-sm font-medium text-foreground">CFA99 Team</span>
              <div className="flex items-center space-x-2">
                <span className="text-xs text-muted-foreground">Official Response</span>
                <div className="w-1 h-1 bg-cfa99-success rounded-full"></div>
                <span className="text-xs text-cfa99-success font-medium">Verified</span>
              </div>
            </div>
          </div>
          <p className="text-foreground text-sm leading-relaxed">{responseContent}</p>
        </div>
      </div>
    </div>
  );
}