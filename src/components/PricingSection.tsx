import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Switch } from './ui/switch';
import { 
  Check, 
  X, 
  Star, 
  Crown, 
  Rocket,
  ArrowRight,
  Shield,
  Headphones
} from 'lucide-react';
import { useState } from 'react';

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: 'Free',
      description: 'Hoàn hảo cho người mới bắt đầu',
      price: { monthly: 0, yearly: 0 },
      icon: Star,
      color: 'from-gray-500/10 to-gray-600/10',
      iconColor: 'text-gray-600',
      buttonVariant: 'outline' as const,
      features: [
        { name: 'Phân tích cổ phiếu nóng', included: true },
        { name: 'Cổ phiếu xu hướng tăng', included: true },
        { name: 'Nhận định thị trường', included: true },
        { name: 'Tin nóng hôm nay', included: true },
        { name: 'Chỉ số nổi bật', included: true },
        { name: 'Điểm mua cổ phiếu', included: false },
        { name: 'Đào tạo khóa học', included: false },
        { name: 'AI phân tích chuyên sâu', included: false },
        { name: 'Hỏi đáp cùng AI', included: false },
        { name: 'Hỗ trợ 24/7', included: false }
      ]
    },
    {
      name: 'Pro',
      description: 'Dành cho nhà đầu tư nghiêm túc',
      price: { monthly: 299000, yearly: 2990000 },
      icon: Crown,
      color: 'from-cfa99-yellow/20 to-cfa99-yellow-light/20',
      iconColor: 'text-cfa99-yellow',
      buttonVariant: 'default' as const,
      popular: true,
      savings: 'Tiết kiệm 17%',
      features: [
        { name: 'Tất cả tính năng Free', included: true },
        { name: 'Điểm mua cổ phiếu', included: true },
        { name: 'AI phân tích chuyên sâu', included: true },
        { name: 'Hỏi đáp cùng AI', included: true },
        { name: 'Tín hiệu realtime', included: true },
        { name: 'Đào tạo khóa học cơ bản', included: true },
        { name: 'Hỗ trợ email', included: true },
        { name: 'Backtesting cơ bản', included: true },
        { name: 'Khóa học nâng cao', included: false },
        { name: 'Hỗ trợ 24/7', included: false }
      ]
    },
    {
      name: 'Enterprise',
      description: 'Cho trader và nhà đầu tư chuyên nghiệp',
      price: { monthly: 599000, yearly: 5990000 },
      icon: Rocket,
      color: 'from-purple-500/10 to-indigo-500/10',
      iconColor: 'text-purple-600',
      buttonVariant: 'default' as const,
      premium: true,
      savings: 'Tiết kiệm 17%',
      features: [
        { name: 'Tất cả tính năng Pro', included: true },
        { name: 'Đào tạo khóa học nâng cao', included: true },
        { name: 'Backtesting không giới hạn', included: true },
        { name: 'API access', included: true },
        { name: 'Tư vấn 1-1 với chuyên gia', included: true },
        { name: 'Hỗ trợ 24/7', included: true },
        { name: 'Custom indicators', included: true },
        { name: 'Portfolio optimization', included: true },
        { name: 'White-label solution', included: true },
        { name: 'Dedicated account manager', included: true }
      ]
    }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN').format(price);
  };

  return (
    <section id="pricing" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-cfa99-yellow/10 text-cfa99-yellow-dark border-cfa99-yellow/20 font-medium">
            💰 Bảng giá
          </Badge>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Chọn gói phù hợp với bạn
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Từ miễn phí cho người mới bắt đầu đến gói enterprise cho trader chuyên nghiệp
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-12">
            <span className={`text-sm font-medium ${!isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
              Hàng tháng
            </span>
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
              className="data-[state=checked]:bg-cfa99-yellow"
            />
            <span className={`text-sm font-medium ${isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
              Hàng năm
            </span>
            {isYearly && (
              <Badge className="bg-cfa99-success/10 text-cfa99-success border-cfa99-success/20 font-medium">
                Tiết kiệm 17%
              </Badge>
            )}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative bg-card border-border hover:shadow-xl transition-all duration-300 ${plan.popular ? 'ring-2 ring-cfa99-yellow/50 scale-105' : ''} ${plan.premium ? 'ring-2 ring-purple-500/50' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-cfa99-yellow text-white border-0 font-semibold px-4 py-1">
                    <Star className="w-3 h-3 mr-1 fill-current" />
                    Phổ biến nhất
                  </Badge>
                </div>
              )}
              
              {plan.premium && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-purple-600 text-white border-0 font-semibold px-4 py-1">
                    <Crown className="w-3 h-3 mr-1 fill-current" />
                    Chuyên nghiệp
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-8 pt-8">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center mx-auto mb-4 border border-border`}>
                  <plan.icon className={`w-8 h-8 ${plan.iconColor}`} />
                </div>
                
                <CardTitle className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </CardTitle>
                
                <CardDescription className="text-muted-foreground mb-6">
                  {plan.description}
                </CardDescription>

                <div className="space-y-2">
                  <div className="text-4xl font-bold text-foreground">
                    {plan.price.monthly === 0 ? (
                      'Miễn phí'
                    ) : (
                      <>
                        {formatPrice(isYearly ? plan.price.yearly / 12 : plan.price.monthly)}
                        <span className="text-base font-normal text-muted-foreground">
                          ₫/tháng
                        </span>
                      </>
                    )}
                  </div>
                  
                  {isYearly && plan.price.monthly > 0 && (
                    <div className="text-sm text-muted-foreground">
                      Thanh toán {formatPrice(plan.price.yearly)}₫/năm
                    </div>
                  )}
                  
                  {plan.savings && isYearly && (
                    <Badge className="bg-cfa99-success/10 text-cfa99-success border-cfa99-success/20 text-xs">
                      {plan.savings}
                    </Badge>
                  )}
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <Button 
                  variant={plan.buttonVariant}
                  className={`w-full mb-8 font-semibold transition-all duration-200 ${
                    plan.buttonVariant === 'default' 
                      ? 'bg-gradient-to-r from-cfa99-yellow to-cfa99-yellow-light hover:from-cfa99-yellow-dark hover:to-cfa99-yellow shadow-lg hover:shadow-xl' 
                      : 'hover:bg-accent/50 border-2'
                  }`}
                  size="lg"
                >
                  {plan.name === 'Free' ? 'Bắt đầu miễn phí' : 'Nâng cấp ngay'}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>

                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      {feature.included ? (
                        <Check className="w-4 h-4 text-cfa99-success mr-3 flex-shrink-0" />
                      ) : (
                        <X className="w-4 h-4 text-muted-foreground/50 mr-3 flex-shrink-0" />
                      )}
                      <span className={feature.included ? 'text-foreground' : 'text-muted-foreground/70'}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="text-center p-6 bg-card rounded-xl border border-border">
            <Shield className="w-8 h-8 text-cfa99-success mx-auto mb-3" />
            <h4 className="font-semibold text-foreground mb-2">Bảo mật tuyệt đối</h4>
            <p className="text-sm text-muted-foreground">Dữ liệu được mã hóa và bảo vệ theo tiêu chuẩn ngân hàng</p>
          </div>
          
          <div className="text-center p-6 bg-card rounded-xl border border-border">
            <Headphones className="w-8 h-8 text-cfa99-yellow mx-auto mb-3" />
            <h4 className="font-semibold text-foreground mb-2">Hỗ trợ chuyên nghiệp</h4>
            <p className="text-sm text-muted-foreground">Đội ngũ tư vấn giàu kinh nghiệm sẵn sàng hỗ trợ 24/7</p>
          </div>
          
          <div className="text-center p-6 bg-card rounded-xl border border-border">
            <Star className="w-8 h-8 text-cfa99-yellow mx-auto mb-3" />
            <h4 className="font-semibold text-foreground mb-2">Đánh giá 5 sao</h4>
            <p className="text-sm text-muted-foreground">Được tin tưởng bởi hơn 100,000+ nhà đầu tư</p>
          </div>
        </div>

        {/* FAQ CTA */}
        <div className="text-center bg-gradient-to-r from-cfa99-yellow/5 to-cfa99-yellow-light/5 rounded-2xl p-8 border border-cfa99-yellow/20">
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            Còn thắc mắc gì không?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Liên hệ với đội ngũ tư vấn của chúng tôi để được giải đáp chi tiết về các gói dịch vụ
          </p>
          <Button 
            variant="outline" 
            size="lg" 
            className="font-medium border-2 hover:bg-accent/50"
          >
            Liên hệ tư vấn
          </Button>
        </div>
      </div>
    </section>
  );
}