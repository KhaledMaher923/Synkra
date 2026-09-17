import { authMetaData } from "../../data/authData";
import { useTheme } from '../../context/ThemeContext.jsx';
import { Lock } from 'lucide-react';

export default function AuthHeader({ mode = 'signIn' }) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const data = authMetaData[mode];

  return (
    <div className="text-center mb-6">
      <div className="flex items-center justify-between text-[11px] font-semibold tracking-wider uppercase mb-5">
        <span className={`flex items-center gap-1.5 px-3 py-1 rounded-full border ${
          isDark 
            ? 'bg-blue-950/50 text-blue-400 border-blue-800/50' 
            : 'bg-blue-50 text-blue-600 border-blue-100'
        }`}>
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
          {data.badge}
        </span>

        {mode === 'signIn' ? (
          <span className={isDark ? 'text-slate-400' : 'text-slate-500'}>
            {data.version}
          </span>
        ) : (
          <span className={`flex items-center gap-1 px-2.5 py-1 rounded-full border text-[10px] ${
            isDark 
              ? 'bg-slate-800 text-slate-300 border-slate-700' 
              : 'bg-slate-100 text-slate-600 border-slate-200'
          }`}>
            <Lock size={12} />
            {data.securityTag}
          </span>
        )}
      </div>

      <h1 className={`text-2xl font-serif font-semibold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
        {data.title}{' '}
        {data.brandName && (
          <span className="italic font-serif text-blue-600">
            {data.brandName}
          </span>
        )}
      </h1>

      {data.subtitle && (
        <p className={`text-xs leading-relaxed px-2 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
          {data.subtitle}
        </p>
      )}
    </div>
  );
}