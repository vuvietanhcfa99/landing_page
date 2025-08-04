import { Star, Menu, Bell, Search } from 'lucide-react';
import { Button } from './ui/button';

export default function ServiceHeader() {
  return (
    <div className="bg-gradient-to-br from-cfa99-yellow via-cfa99-yellow-light to-cfa99-yellow-dark text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full -translate-x-20 -translate-y-20"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-white rounded-full translate-x-16 translate-y-16"></div>
      </div>

      {/* Top Navigation */}
      <div className="relative z-10 flex items-center justify-between p-4">
        <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
          <Menu className="w-6 h-6" />
        </Button>
        
        <div className="flex items-center space-x-1">
          <h1 className="text-lg font-semibold">CFA99</h1>
          <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full font-medium">PRO</span>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
            <Search className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 relative">
            <Bell className="w-5 h-5" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-cfa99-warning rounded-full"></div>
          </Button>
        </div>
      </div>

      {/* Service Info */}
      <div className="relative z-10 px-4 pb-8">
        <div className="text-center">
          {/* Enhanced Logo */}
          <div className="w-24 h-24 bg-white/15 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/20">
            <div className="text-center">
              <div className="text-xl font-bold">CFA</div>
              <div className="text-xs opacity-90">99</div>
            </div>
          </div>
          
          <h2 className="text-2xl font-semibold mb-2">Professional Services</h2>
          <p className="text-amber-100 mb-6 text-base">
            Trusted by thousands of satisfied customers worldwide
          </p>

          {/* Enhanced Rating Display */}
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="w-5 h-5 fill-yellow-300 text-yellow-300 drop-shadow-sm"
                />
              ))}
            </div>
            <div className="text-white font-semibold text-lg">4.8</div>
            <div className="text-amber-100 text-sm">(247 reviews)</div>
          </div>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 text-center">
            <div>
              <div className="text-xl font-semibold">1.2K+</div>
              <div className="text-xs text-amber-200">Projects</div>
            </div>
            <div className="w-px h-8 bg-white/20"></div>
            <div>
              <div className="text-xl font-semibold">98%</div>
              <div className="text-xs text-amber-200">Satisfaction</div>
            </div>
            <div className="w-px h-8 bg-white/20"></div>
            <div>
              <div className="text-xl font-semibold">24/7</div>
              <div className="text-xs text-amber-200">Support</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}