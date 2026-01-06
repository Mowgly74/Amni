import style from"./Sidebar.module.css"
import React, { useState } from 'react';
import { User, Grid, FileText, Users, BarChart2, Archive, ShoppingBag, Wallet, Settings, LogOut, ArrowLeft, Moon, Sun, ArrowRight } from 'lucide-react';





export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar - Fixed */}
      <div 
        className={`fixed top-0 right-0 h-screen shadow-2xl p-6  flex flex-col transition-all duration-300 z-50 ${
          collapsed ? 'w-24 items-center' : 'w-72'
        } ${darkMode ? 'bg-slate-900' : 'bg-white'}`}
      >
        {/* Header */}
        <div className={`flex items-center mb-8 ${collapsed ? 'flex-col gap-4' : 'justify-between'}`}>
          <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0">
          </div>
          {!collapsed && (
            <button 
              onClick={() => setCollapsed(true)}
              className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                darkMode ? 'bg-slate-800 hover:bg-slate-700' : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              <ArrowRight className={`w-6 h-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
            </button>
          )}
        </div>

        {collapsed ? (
          /* Collapsed View */
          <>
            <div className="space-y-4 mb-auto w-full">
              <button className={`w-full h-12 flex items-center justify-center rounded-xl transition-colors ${
                darkMode ? 'hover:bg-slate-800' : 'hover:bg-gray-50'
              }`}>
                <Grid className={`w-6 h-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
              </button>
              <button className={`w-full h-12 flex items-center justify-center  rounded-xl transition-colors ${
                darkMode ? 'hover:bg-slate-800' : 'hover:bg-gray-50'
              }`}>
                <FileText className={`w-6 h-6  ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
              </button>
              <button className={`w-full h-12 flex items-center justify-center rounded-xl transition-colors ${
                darkMode ? 'hover:bg-slate-800' : 'hover:bg-gray-50'
              }`}>
                <Users className={`w-6 h-6  ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
              </button>
              <div className={`h-px my-4 ${darkMode ? 'bg-slate-800' : 'bg-gray-200'}`}></div>
              <button className={`w-full h-12 flex items-center justify-center rounded-xl transition-colors ${
                darkMode ? 'hover:bg-slate-800' : 'hover:bg-gray-50'
              }`}>
                <BarChart2 className={`w-6 h-6  ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
              </button>
              <button className={`w-full h-12 flex items-center justify-center rounded-xl transition-colors ${
                darkMode ? 'hover:bg-slate-800' : 'hover:bg-gray-50'
              }`}>
                <Archive className={`w-6 h-6  ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
              </button>
              <div className={`h-px my-4 ${darkMode ? 'bg-slate-800' : 'bg-gray-200'}`}></div>
              <button className={`w-full h-12 flex items-center justify-center rounded-xl ${
                darkMode ? 'bg-blue-900' : 'bg-blue-50'
              }`}>
                <ShoppingBag className={`w-6 h-6  ${darkMode ? 'text-blue-400' : 'text-blue-500'}`} />
              </button>
              <button className={`w-full h-12 flex items-center justify-center rounded-xl transition-colors ${
                darkMode ? 'hover:bg-slate-800' : 'hover:bg-gray-50'
              }`}>
                <Wallet className={`w-6 h-6  ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
              </button>
            </div>

            <div className="space-y-3 w-full">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto ${
                darkMode ? 'bg-blue-900' : 'bg-blue-200'
              }`}>
                <User className={`w-6 h-6  ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              </div>
              <button 
                onClick={() => setDarkMode(!darkMode)}
                className={`w-full h-10 flex items-center justify-center rounded-xl transition-colors ${
                  darkMode ? 'hover:bg-slate-800 bg-slate-800' : 'hover:bg-gray-50 bg-gray-100'
                }`}
              >
                {darkMode ? (
                  <Sun className="w-6 h-6  text-yellow-400" />
                ) : (
                  <Moon className="w-6 h-6 text-gray-600" />
                )}
              </button>
              <button 
                onClick={() => setCollapsed(false)}
                className={`w-full h-10 flex items-center justify-center rounded-xl transition-colors ${
                  darkMode ? 'bg-red-500 hover:bg-red-600' : 'bg-red-50 hover:bg-red-100'
                }`}
              >
                <ArrowRight className={`w-5 h-5 rotate-180 ${darkMode ? 'text-white' : 'text-red-500'}`} />
              </button>
            </div>
          </>
        ) : (
          /* Expanded View */
          <>
            <div className="mb-6">
              <p className={`text-xs uppercase tracking-wider mb-4 font-medium ${
                darkMode ? 'text-gray-500' : 'text-gray-400'
              }`}>Profile</p>
              <div className="space-y-2">
                <button className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors ${
                  darkMode ? 'hover:bg-slate-800' : 'hover:bg-gray-50'
                }`}>
                  <Grid className={`w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                  <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Dashboard</span>
                </button>
                <button className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors ${
                  darkMode ? 'hover:bg-slate-800' : 'hover:bg-gray-50'
                }`}>
                  <FileText className={`w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                  <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Matches</span>
                </button>
                <button className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors ${
                  darkMode ? 'hover:bg-slate-800' : 'hover:bg-gray-50'
                }`}>
                  <Users className={`w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                  <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Team</span>
                </button>
              </div>
            </div>

            <div className="mb-6">
              
              <div className="space-y-2">
                <button className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors ${
                  darkMode ? 'hover:bg-slate-800' : 'hover:bg-gray-50'
                }`}>
                  <BarChart2 className={`w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                  <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Ranking</span>
                </button>
                <button className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors ${
                  darkMode ? 'hover:bg-slate-800' : 'hover:bg-gray-50'
                }`}>
                  <Archive className={`w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                  <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Archive</span>
                </button>
              </div>
            </div>

            <div className="mb-auto">
              <p className={`text-xs uppercase tracking-wider mb-4 font-medium ${
                darkMode ? 'text-gray-500' : 'text-gray-400'
              }`}>Marketplace</p>
              <div className="space-y-2">
                <button className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl ${
                  darkMode ? 'bg-blue-900 text-blue-400' : 'bg-blue-50 text-blue-500'
                }`}>
                  <ShoppingBag className="w-5 h-5" />
                  <span className="font-medium">Market</span>
                </button>
                <button className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors ${
                  darkMode ? 'hover:bg-slate-800' : 'hover:bg-gray-50'
                }`}>
                  <Wallet className={`w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                  <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Wallet</span>
                </button>
              </div>
            </div>

            <div className={`mt-6 pt-6 border-t ${darkMode ? 'border-slate-800' : 'border-gray-100'}`}>
              <div className={`flex items-center gap-3 p-3 rounded-xl ${
                darkMode ? 'bg-slate-800' : 'bg-blue-50'
              }`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  darkMode ? 'bg-blue-900' : 'bg-blue-200'
                }`}>
                  <User className={`w-5 h-5 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-gray-500">Username</p>
                  <p className={`text-sm font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Nicola Web Design</p>
                </div>
                <button 
                  onClick={() => setDarkMode(!darkMode)}
                  className={`w-6 h-6  flex items-center justify-center rounded-lg transition-colors ${
                    darkMode ? 'hover:bg-slate-700' : 'hover:bg-blue-100'
                  }`}
                >
                  {darkMode ? (
                    <Sun className="w-4 h-4 text-yellow-400" />
                  ) : (
                    <Moon className="w-4 h-4 text-gray-600" />
                  )}
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      
    </div>
  );
};

