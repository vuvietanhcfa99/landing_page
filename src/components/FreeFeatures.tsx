import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { 
  TrendingUp, 
  BarChart3, 
  Newspaper, 
  Eye, 
  Activity,
  CheckCircle
} from 'lucide-react';

export default function FreeFeatures() {
  const freeFeatures = [
    {
      icon: TrendingUp,
      title: 'Phân tích cổ phiếu nóng',
      description: 'Theo dõi và phân tích các cổ phiếu được quan tâm nhiều nhất trong ngày',
      features: [
        'Top 10 cổ phiếu hot nhất',
        'Biểu đồ giá realtime',
        'Khối lượng giao dịch',
        'Phân tích kỹ thuật cơ bản'
      ],
      color: 'from-red-500/10 to-orange-500/10',
      iconColor: 'text-orange-600'
    },
    {
      icon: BarChart3,
      title: 'Cổ phiếu xu hướng tăng',
      description: 'Xác định những cổ phiếu có tiềm năng tăng giá trong thời gian tới',
      features: [
        'Thuật toán phân tích xu hướng',
        'Tín hiệu mua/bán cơ bản',
        'Lọc theo ngành nghề',
        'Xếp hạng tiềm năng'
      ],
      color: 'from-green-500/10 to-emerald-500/10',
      iconColor: 'text-green-600'
    },
    {
      icon: Newspaper,
      title: 'Nhận định thị trường',
      description: 'Báo cáo phân tích tổng quan về tình hình thị trường chứng khoán',
      features: [
        'Báo cáo thị trường hàng ngày',
        'Phân tích vĩ mô',
        'Dự báo xu hướng',
        'Tác động từ tin tức'
      ],
      color: 'from-blue-500/10 to-cyan-500/10',
      iconColor: 'text-blue-600'
    },
    {
      icon: Eye,
      title: 'Tin nóng hôm nay',
      description: 'Cập nhật tin tức tài chính nóng hổi ảnh hưởng đến thị trường',
      features: [
        'Tin tức realtime',
        'Phân loại theo tác động',
        'Thông báo quan trọng',
        'Lịch sự kiện'
      ],
      color: 'from-purple-500/10 to-violet-500/10',
      iconColor: 'text-purple-600'
    },
    {
      icon: Activity,
      title: 'Chỉ số nổi bật',
      description: 'Theo dõi các chỉ số quan trọng của thị trường chứng khoán',
      features: [
        'VN-Index, HNX-Index',
        'VN30, HNX30',
        'Khối ngoại, tự doanh',
        'P/E, P/B ratio trung bình'
      ],
      color: 'from-amber-500/10 to-yellow-500/10',
      iconColor: 'text-amber-600'
    }
  ];

  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-cfa99-success/10 text-cfa99-success border-cfa99-success/20 font-medium">
            ✨ Hoàn toàn miễn phí
          </Badge>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Tính năng miễn phí
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Trải nghiệm ngay các công cụ phân tích cổ phiếu mạnh mẽ mà không cần trả phí
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {freeFeatures.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border hover:border-cfa99-yellow/30 bg-card">
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200 border border-border`}>
                  <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
                </div>
                
                <CardTitle className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </CardTitle>
                
                <CardDescription className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <ul className="space-y-2">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-cfa99-success mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Info Section */}
        <div className="text-center bg-gradient-to-r from-cfa99-yellow/5 to-cfa99-yellow-light/5 rounded-2xl p-8 border border-cfa99-yellow/20">
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            Tất cả đều miễn phí
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trải nghiệm đầy đủ các tính năng phân tích cổ phiếu cơ bản mà không cần đăng ký tài khoản hay thanh toán bất kỳ khoản phí nào
          </p>
        </div>
      </div>
    </section>
  );
}