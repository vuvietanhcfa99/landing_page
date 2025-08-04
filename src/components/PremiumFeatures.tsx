import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { 
  Target, 
  GraduationCap, 
  Brain, 
  MessageCircleQuestion,
  Crown,
  Zap,
  Star
} from 'lucide-react';

export default function PremiumFeatures() {
  const premiumFeatures = [
    {
      icon: Target,
      title: 'Điểm mua cổ phiếu',
      description: 'AI phân tích và đưa ra các điểm mua/bán tối ưu với độ chính xác cao',
      features: [
        'Tín hiệu mua/bán chính xác 92%',
        'Phân tích kỹ thuật chuyên sâu',
        'Stop-loss và take-profit tự động',
        'Báo cáo chi tiết từng lệnh',
        'Backtesting chiến lược'
      ],
      popular: true,
      color: 'from-cfa99-yellow/20 to-cfa99-yellow-light/20'
    },
    {
      icon: GraduationCap,
      title: 'Đào tạo khóa học',
      description: 'Các khóa học đầu tư chuyên nghiệp từ cơ bản đến nâng cao',
      features: [
        'Video bài giảng chất lượng cao',
        'Tài liệu PDF chi tiết',
        'Quiz và bài tập thực hành',
        'Chứng chỉ hoàn thành',
        'Hỗ trợ trực tuyến 1-1'
      ],
      popular: false,
      color: 'from-blue-500/10 to-indigo-500/10'
    },
    {
      icon: Brain,
      title: 'Phân tích cổ phiếu bằng AI',
      description: 'Trí tuệ nhân tạo phân tích sâu các yếu tố ảnh hưởng đến giá cổ phiếu',
      features: [
        'Phân tích đa chiều với AI',
        'Dự báo giá ngắn/dài hạn',
        'Đánh giá rủi ro tự động',
        'So sánh với cổ phiếu cùng ngành',
        'Tối ưu hóa danh mục đầu tư'
      ],
      popular: true,
      color: 'from-purple-500/10 to-pink-500/10'
    },
    {
      icon: MessageCircleQuestion,
      title: 'Hỏi đáp cùng AI',
      description: 'Chatbot AI trả lời mọi câu hỏi về đầu tư và thị trường chứng khoán',
      features: [
        'Trả lời 24/7 tức thì',
        'Hiểu ngữ cảnh tiếng Việt',
        'Tư vấn chiến lược đầu tư',
        'Giải thích thuật ngữ tài chính',
        'Lịch sử hội thoại không giới hạn'
      ],
      popular: false,
      color: 'from-green-500/10 to-teal-500/10'
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-cfa99-yellow/20 text-cfa99-yellow-dark border-cfa99-yellow/30 font-medium">
            <Crown className="w-4 h-4 mr-1" />
            Tính năng nâng cao
          </Badge>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Tính năng chuyên nghiệp
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Khám phá các công cụ AI tiên tiến và hệ thống phân tích chuyên sâu dành cho trader và nhà đầu tư chuyên nghiệp
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {premiumFeatures.map((feature, index) => (
            <Card key={index} className={`group hover:shadow-xl transition-all duration-300 border-border hover:border-cfa99-yellow/30 bg-card relative overflow-hidden ${feature.popular ? 'ring-2 ring-cfa99-yellow/30' : ''}`}>
              {feature.popular && (
                <div className="absolute top-4 right-4">
                  <Badge className="bg-cfa99-yellow text-white border-0 font-semibold">
                    <Star className="w-3 h-3 mr-1 fill-current" />
                    Nổi bật
                  </Badge>
                </div>
              )}
              
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              <CardHeader className="pb-6 relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cfa99-yellow/10 to-cfa99-yellow-light/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200 border border-cfa99-yellow/20">
                  <feature.icon className="w-8 h-8 text-cfa99-yellow" />
                </div>
                
                <CardTitle className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </CardTitle>
                
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0 relative z-10">
                <ul className="space-y-3">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="flex items-start text-sm text-muted-foreground">
                      <Zap className="w-4 h-4 text-cfa99-yellow mr-3 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Information CTA */}
        <div className="bg-gradient-to-r from-cfa99-yellow/5 via-cfa99-yellow-light/5 to-cfa99-yellow/5 rounded-2xl p-8 border border-cfa99-yellow/20 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Tính năng chuyên nghiệp cho trader
            </h3>
            <p className="text-muted-foreground mb-4 text-lg">
              Các tính năng nâng cao được thiết kế đặc biệt cho nhà đầu tư và trader có kinh nghiệm, 
              giúp nâng cao hiệu quả giao dịch và tối ưu hóa lợi nhuận
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Zap className="w-4 h-4 text-cfa99-yellow mr-2" />
                <span>AI tiên tiến</span>
              </div>
              <div className="flex items-center">
                <Zap className="w-4 h-4 text-cfa99-yellow mr-2" />
                <span>Độ chính xác cao</span>
              </div>
              <div className="flex items-center">
                <Zap className="w-4 h-4 text-cfa99-yellow mr-2" />
                <span>Hỗ trợ 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}