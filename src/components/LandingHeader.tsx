import { useState } from 'react';
import { Button } from './ui/button';
import { User } from 'lucide-react';


export default function LandingHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Trang chủ', href: '#home' },
    { label: 'Tính năng', href: '#features' },
    { label: 'Bảng giá', href: '#pricing' },
    { label: 'Liên hệ', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-slide-up">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-2 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              
              <div className="flex flex-col space-y-3 pt-4 border-t border-border">
                <Button variant="outline" size="sm" className="justify-start">
                  <User className="w-4 h-4 mr-2" />
                  Đăng nhập
                </Button>
                
                <Button size="sm" className="bg-gradient-to-r from-cfa99-yellow to-cfa99-yellow-light hover:from-cfa99-yellow-dark hover:to-cfa99-yellow font-medium">
                  Dùng thử miễn phí
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}