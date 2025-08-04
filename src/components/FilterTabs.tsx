import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface FilterTabsProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const filterOptions = [
  { id: 'all', label: 'All Reviews', count: 247 },
  { id: 'service', label: 'Service', count: 156 },
  { id: 'support', label: 'Support', count: 91 },
  { id: 'recent', label: 'Recent', count: 24 },
];

export default function FilterTabs({ activeFilter, onFilterChange }: FilterTabsProps) {
  return (
    <div className="flex space-x-2 overflow-x-auto pb-2">
      {filterOptions.map((option) => (
        <Button
          key={option.id}
          variant={activeFilter === option.id ? 'default' : 'outline'}
          size="sm"
          onClick={() => onFilterChange(option.id)}
          className={`flex items-center space-x-2 whitespace-nowrap transition-all duration-200 font-medium ${
            activeFilter === option.id
              ? 'bg-cfa99-yellow hover:bg-cfa99-yellow-dark text-white'
              : 'hover:bg-accent hover:text-accent-foreground'
          }`}
        >
          <span>{option.label}</span>
          <Badge 
            variant={activeFilter === option.id ? 'secondary' : 'outline'}
            className={`text-xs ${
              activeFilter === option.id 
                ? 'bg-white/20 text-white border-white/20' 
                : ''
            }`}
          >
            {option.count}
          </Badge>
        </Button>
      ))}
    </div>
  );
}