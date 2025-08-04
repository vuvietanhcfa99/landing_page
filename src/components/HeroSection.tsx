import { Button } from './ui/button';
import { Badge } from './ui/badge';
import {  TrendingUp, Users, Award, BarChart3, Smartphone } from 'lucide-react';

export default function HeroSection() {
  const stats = [
    { icon: Users, label: 'Người dùng', value: '100K+' },
    { icon: TrendingUp, label: 'Độ chính xác', value: '92%' },
    { icon: Award, label: 'Giải thưởng', value: '15+' },
    { icon: BarChart3, label: 'Cổ phiếu theo dõi', value: '1500+' },
  ];

  return (
    <section id="home" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-cfa99-yellow/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-cfa99-yellow-light/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cfa99-yellow/5 to-cfa99-yellow-light/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          {/* Badge */}
          <Badge className="mb-6 bg-cfa99-yellow/10 text-cfa99-yellow-dark border-cfa99-yellow/20 hover:bg-cfa99-yellow/20 font-medium">
            🚀 Nền tảng phân tích cổ phiếu #1 Việt Nam
          </Badge>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Đầu tư thông minh với
            <span className="block bg-gradient-to-r from-cfa99-yellow via-cfa99-yellow-light to-cfa99-yellow-dark bg-clip-text text-transparent">
              AI phân tích cổ phiếu
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            Tận dụng sức mạnh của trí tuệ nhân tạo để phân tích thị trường chứng khoán, 
            dự đoán xu hướng và tối ưu hóa danh mục đầu tư của bạn.
          </p>

          {/* Download App Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            {/* Google Play Button */}
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-cfa99-yellow to-cfa99-yellow-light hover:from-cfa99-yellow-dark hover:to-cfa99-yellow font-semibold px-6 py-3 h-14 text-base shadow-lg hover:shadow-xl transition-all duration-200 min-w-[200px]"
            >
              <a className="flex items-center space-x-3"  href="https://play.google.com/store/apps/details?id=a2z.tech.app.cfa99" target="_blank">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-xs text-white/90 leading-tight">TẢI TRÊN</div>
                  <div className="text-sm font-semibold text-white leading-tight">Google Play</div>
                </div>
              </a>
            </Button>
            
            {/* App Store Button */}
            <Button 
              variant="outline" 
              size="lg" 
              className="px-6 py-3 h-14 text-base font-medium border-2 hover:bg-accent/50 min-w-[200px] border-cfa99-yellow/30 hover:border-cfa99-yellow"
            >
              <a className="flex items-center space-x-3" href="https://apps.apple.com/vn/app/cfa99/id1642306147" target="_blank">
                <div className="w-8 h-8 bg-cfa99-yellow/10 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-cfa99-yellow" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-xs text-muted-foreground leading-tight">TẢI TRÊN</div>
                  <div className="text-sm font-semibold text-foreground leading-tight">App Store</div>
                </div>
              </a>
            </Button>
          </div>

          {/* Additional CTA */}
          <div className="flex items-center justify-center gap-4 mb-16">
            
            
            <div className="flex items-center text-sm text-muted-foreground">
              <Smartphone className="w-4 h-4 mr-2 text-cfa99-yellow" />
              <span>Có sẵn trên iOS và Android</span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-cfa99-yellow/10 to-cfa99-yellow-light/10 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-200 border border-cfa99-yellow/20">
                  <stat.icon className="w-8 h-8 text-cfa99-yellow" />
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Image/Dashboard Preview */}
        <div className="relative max-w-5xl mx-auto">
          
          
          {/* Floating elements */}
          
          
        </div>
      </div>
    </section>
  );
}