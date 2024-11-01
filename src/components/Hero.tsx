import { ArrowForward, Twitter, Instagram, Facebook, Camera, WhatsApp, ShoppingBag, Mail, Notifications, CalendarMonth, Message, Games, LocalMovies, MusicNote, PhotoCamera, Settings } from '@mui/icons-material';

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const apps = [
    {
      name: 'Twitter',
      icon: Twitter,
      color: 'from-sky-400 to-blue-500',
      textColor: 'text-sky-500',
      position: 'top-12 right-4 rotate-6',
      delay: 'delay-100'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      color: 'from-pink-500 to-purple-500',
      textColor: 'text-pink-500',
      position: 'bottom-24 right-8 rotate-12',
      delay: 'delay-300'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      color: 'from-blue-600 to-blue-700',
      textColor: 'text-blue-600',
      position: 'top-32 left-4 -rotate-6',
      delay: 'delay-200'
    },
    {
      name: 'WhatsApp',
      icon: WhatsApp,
      color: 'from-green-500 to-emerald-600',
      textColor: 'text-green-500',
      position: 'bottom-32 left-8 -rotate-12',
      delay: 'delay-400'
    },
    {
      name: 'Snapchat',
      icon: Camera,
      color: 'from-yellow-400 to-yellow-500',
      textColor: 'text-yellow-500',
      position: 'top-64 right-8 rotate-6',
      delay: 'delay-500'
    }
  ];

  // Additional apps for the grid
  const gridApps = [
    { icon: ShoppingBag, name: 'Shop', color: 'from-orange-500 to-red-500' },
    { icon: Mail, name: 'Email', color: 'from-red-500 to-pink-500' },
    { icon: Notifications, name: 'Alerts', color: 'from-purple-500 to-indigo-500' },
    { icon: CalendarMonth, name: 'Calendar', color: 'from-blue-500 to-cyan-500' },
    { icon: Message, name: 'Chat', color: 'from-teal-500 to-green-500' },
    { icon: Games, name: 'Games', color: 'from-yellow-500 to-orange-500' },
    { icon: LocalMovies, name: 'Movies', color: 'from-red-500 to-rose-500' },
    { icon: MusicNote, name: 'Music', color: 'from-violet-500 to-purple-500' },
    { icon: PhotoCamera, name: 'Camera', color: 'from-emerald-500 to-teal-500' },
    { icon: Settings, name: 'Settings', color: 'from-gray-500 to-slate-500' }
  ];

  // Additional placeholder apps for the grid
  const placeholderApps = Array(6).fill(null).map((_, i) => ({
    id: i,
    opacity: Math.random() * 0.3 + 0.1
  }));

  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-br from-purple-50 to-white overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating clouds */}
        <div className="absolute top-20 right-20 w-24 h-12 bg-sky-200/40 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-32 left-20 w-32 h-16 bg-purple-200/40 rounded-full blur-xl animate-float delay-200"></div>
        <div className="absolute top-1/3 right-1/4 w-28 h-14 bg-indigo-200/40 rounded-full blur-xl animate-float delay-500"></div>
        
        {/* Abstract shapes */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-20 w-[500px] h-[500px] bg-gradient-to-tr from-sky-200/20 to-indigo-200/20 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <div className="backdrop-blur-sm bg-white/30 p-8 rounded-2xl border border-white/20 shadow-xl">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Transforme sua</span>
                <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Presença Digital
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Obtenha o melhor dos dois mundos: o poder de um aplicativo nativo com o alcance de um site. 
                PWAs oferecem experiências perfeitas, funcionalidades offline e atualizações instantâneas.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <button
                  onClick={scrollToContact}
                  className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Começar Agora
                  <ArrowForward className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Phone with Apps Illustration */}
          <div className="mt-12 lg:mt-0 lg:col-span-6">
            <div className="relative flex justify-center items-center h-[600px]">
              {/* Main Phone */}
              <div className="relative w-48 h-96 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-[3rem] shadow-2xl transform hover:rotate-0 transition-all duration-500 hover:scale-105">
                {/* Screen */}
                <div className="absolute inset-2 bg-white rounded-[2.5rem] overflow-hidden">
                  {/* Status Bar */}
                  <div className="absolute top-2 inset-x-4 h-4 flex justify-between items-center">
                    <div className="text-[8px] font-medium text-gray-900">9:41</div>
                    <div className="flex space-x-1">
                      <div className="w-3 h-2 bg-gray-900 rounded-sm"></div>
                      <div className="w-3 h-2 bg-gray-900 rounded-sm"></div>
                      <div className="w-3 h-2 bg-gray-900 rounded-sm"></div>
                    </div>
                  </div>

                  {/* App Content */}
                  <div className="absolute top-8 inset-x-4 bottom-4 overflow-hidden">
                    {/* App Grid */}
                    <div className="grid grid-cols-4 gap-2">
                      {/* Main Apps */}
                      {gridApps.map((app, index) => {
                        const Icon = app.icon;
                        return (
                          <div
                            key={index}
                            className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-1.5 flex flex-col items-center justify-center gap-1 hover:scale-105 transition-transform"
                          >
                            <div className={`w-6 h-6 rounded-lg bg-gradient-to-br ${app.color} p-1`}>
                              <Icon className="w-full h-full text-white" />
                            </div>
                            <span className="text-[6px] font-medium text-gray-600">{app.name}</span>
                          </div>
                        );
                      })}
                      
                      {/* Placeholder Apps */}
                      {placeholderApps.map((app) => (
                        <div
                          key={app.id}
                          className="aspect-square rounded-xl p-1.5 flex flex-col items-center justify-center gap-1"
                          style={{ opacity: app.opacity }}
                        >
                          <div className="w-6 h-6 rounded-lg bg-gray-400/50"></div>
                          <div className="w-8 h-1 bg-gray-400/50 rounded"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Notch */}
                <div className="absolute top-6 inset-x-0 mx-auto w-24 h-4 bg-gray-900 rounded-full"></div>
              </div>

              {/* Floating App Cards */}
              {apps.map((app, index) => {
                const Icon = app.icon;
                return (
                  <div
                    key={index}
                    className={`absolute ${app.position} animate-float ${app.delay} backdrop-blur-sm bg-white/90 p-4 rounded-2xl shadow-lg border border-white/20 transform hover:scale-110 transition-transform`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${app.color} p-2`}>
                        <Icon className="w-full h-full text-white" />
                      </div>
                      <div>
                        <p className={`text-sm font-semibold ${app.textColor}`}>{app.name}</p>
                        <p className="text-xs text-gray-500">PWA Version</p>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Animated Circles */}
              <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-indigo-300/20 to-purple-300/20 rounded-full animate-pulse"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-blue-300/10 to-purple-300/10 rounded-full animate-pulse delay-300"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-300/5 to-purple-300/5 rounded-full animate-pulse delay-700"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
}