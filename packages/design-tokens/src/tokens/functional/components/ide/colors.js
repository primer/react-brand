module.exports = {
  brand: {
    IDE: {
      default: {
        bgColor: {
          value: 'var(--base-color-scale-gray-1)',
          dark: '#131337',
        },
        editor: {
          bgColor: {
            value: 'var(--base-color-scale-white-0)',
            dark: '#242538',
          },
          tabs: {
            bgColor: {
              value: 'var(--base-color-scale-gray-0)',
              dark: 'linear-gradient(0deg, rgba(0, 56, 255, 0.02) 0%, rgba(0, 56, 255, 0.02) 100%), #17182c',
            },
          },
          tab: {
            bgColor: {
              rest: {
                value: 'var(--base-color-scale-gray-0)',
                dark: 'rgba(36, 37, 56, 0.5)',
              },
              active: {
                value: 'var(--base-color-scale-white-0)',
                dark: '#242538',
              },
            },
          },
        },
      },
      glass: {
        bgColor: {
          rest: {
            value: 'rgba(255, 255, 255, 0.7)',
            dark: 'rgba(0, 0, 0, 0.7)',
          },
        },
        editor: {
          bgColor: {
            value: '#ffffffc4',
            dark: '#242538c4',
          },
          tabs: {
            bgColor: {
              value: 'transparent',
              dark: 'transparent',
            },
          },
          tab: {
            bgColor: {
              rest: {
                value: '#ffffff80',
                dark: '#24253880',
              },
              active: {
                value: '#ffffffc4',
                dark: '#242538c4',
              },
            },
          },
        },
      },
      borderColor: {
        value: 'var(--brand-color-border-muted);',
        dark: '#171d22;',
      },
      autoSuggest: {
        bgColor: {
          value: '#0969da',
          dark: '#0969da',
        },
        fgColor: {
          value: 'var(--base-color-scale-white-0)',
          dark: 'var(--base-color-scale-white-0)',
        },
      },
      autoSuggestLine: {
        bgColor: {
          value: 'var(--base-color-scale-blue-0)',
          dark: 'var(--base-color-scale-blue-9)',
        },
      },
    },
  },
}
