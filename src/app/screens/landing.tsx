import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { Github, Sparkles, Zap } from 'lucide-react';
import { ModeToggle } from '../components/mode-toggle';

export function LandingScreen() {
  return (
    <div className="h-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-white/10 backdrop-blur-sm bg-black/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Reactronite</span>
          </div>
          <ModeToggle />
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-600/20 blur-3xl" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-blue-500/10 text-blue-400 border-blue-500/20">
              <Sparkles className="w-3 h-3 mr-1" />
              Modern Electron Development
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Build Desktop Apps with
              <span className="bg-gradient-to-r from-blue-400 to-blue-400 bg-clip-text text-transparent">
                {' '}
                Lightning Speed
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              The ultimate Electron-Forge boilerplate with React, Vite, and TypeScript. Get your
              desktop application up and running in minutes, not hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-black/20 hover:bg-black/10 text-white font-semibold shadow-lg transition-colors"
                onClick={() => {
                  window.open(
                    'https://github.com/flaviodelgrosso/electron-forge-react-vite-boilerplate',
                    '_blank',
                  );
                }}
              >
                <Github className="w-5 h-5 mr-2" />
                View on GitHub
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
