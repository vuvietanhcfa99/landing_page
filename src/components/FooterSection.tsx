
export default function FooterSection() {
 
  return (
    <footer id="contact" className="bg-card border-t border-border">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-cfa99-yellow/5 to-cfa99-yellow-light/5 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          
        </div>
      </div>

      {/* Main Footer */}
      

      {/* Bottom Footer */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground">
              © 2024 CFA99. All rights reserved. Made with ❤️ in Vietnam.
            </div>
            
            <div className="flex items-center space-x-4">
              {/* {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-8 h-8 bg-muted hover:bg-cfa99-yellow/10 rounded-lg flex items-center justify-center text-muted-foreground hover:text-cfa99-yellow transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))} */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}