module.exports = {
  brand: {
    Button: {
      background: {
        base: {
          value: 'var(--base-color-scale-gray-9)',
          dark: 'var(--base-color-scale-gray-0)',
        },
        overlay: {
          value: `linear-gradient(180deg, hsla(0, 0%, 100%, 0.15) 0, hsla(0, 0%, 100%, 0) 100%), var(--base-color-scale-black-0)`,
          dark: `linear-gradient(180deg, hsla(0,0%,100%,0.15) 0,hsla(0,0%,100%,0) 100%),var(--base-color-scale-white-0)`,
        },
        disabled: {
          value: `var(--base-color-scale-gray-4)`,
          dark: `var(--base-color-scale-gray-4)`,
        },
      },
      fg: {
        primary: {
          disabled: {
            value: `var(--base-color-scale-gray-2)`,
            dark: `var(--base-color-scale-gray-2)`,
          },
        },
        secondary: {
          disabled: {
            value: `var(--base-color-scale-gray-3)`,
            dark: `var(--base-color-scale-gray-4)`,
          },
        },
      },
      shadow: {
        primary: {
          default: {
            value: 'inset 0 0 0 1px var(--base-color-scale-black-0)',
            dark: 'inset 0 0 0 1px var(--base-color-scale-white-0)',
          },
          hover: {
            value:
              '0 3px 2px rgba(0, 0, 0, 0.07), 0 7px 5px rgba(0, 0, 0, 0.04), 0 12px 10px rgba(0, 0, 0, 0.03), 0 22px 18px rgba(0, 0, 0, 0.03), 0 42px 33px rgba(0, 0, 0, 0.02), 0 100px 80px rgba(0, 0, 0, 0.02)',
            dark: '0 4px 7px rgba(0, 0, 0, 0.15), 0 100px 80px rgba(255, 255, 255, 0.02), 0 42px 33px rgba(255, 255, 255, 0.024), 0 22px 18px rgba(255, 255, 255, 0.028), 0 12px 10px rgba(255, 255, 255, 0.034), 0 7px 5px rgba(255, 255, 255, 0.04), 0 3px 2px rgba(255, 255, 255, 0.07)',
          },
        },
        secondary: {
          default: {
            value: 'inset 0 0 0 1px var(--brand-color-border-default)',
            dark: 'inset 0 0 0 1px hsl(var(--base-color-scale-white-0-hsl) / 25%)',
          },
          hover: {
            value: 'inset 0 0 0 2px var(--brand-color-neutral-emphasisPlus)',
            dark: 'inset 0 0 0 2px var(--base-color-scale-white-0)',
          },
        },
        subtle: {
          hover: {
            value: 'inset 0 0 0 2px var(--brand-color-neutral-emphasisPlus)',
            dark: 'inset 0 0 0 2px var(--base-color-scale-white-0)',
          },
        },
        focus: {
          value: 'var(--brand-color-focus)',
          dark: 'var(--brand-color-focus)',
        },
      },
    },
    button: {
      primary: {
        bgColor: {
          rest: {
            value: 'var(--base-color-scale-black-0)',
            dark: 'var(--base-color-scale-white-0)',
          },
          hover: {
            value: 'var(--base-color-scale-gray-8)',
            dark: 'var(--base-color-scale-gray-0)',
          },
          active: {
            value: 'var(--base-color-scale-gray-8)',
            dark: 'var(--base-color-scale-gray-0)',
          },
          disabled: {
            value: 'var(--base-color-scale-gray-4)',
            dark: 'var(--base-color-scale-gray-4)',
          },
        },
        borderColor: {
          rest: {
            value: 'var(--base-color-scale-gray-8)',
            dark: 'var(--base-color-scale-white-0)',
          },
          hover: {
            value: 'var(--base-color-scale-gray-6)',
            dark: 'var(--base-color-scale-white-0)',
          },
          active: {
            value: 'var(--base-color-scale-white-6)',
            dark: 'var(--base-color-scale-white-0)',
          },
          disabled: {
            value: 'var(--base-color-scale-gray-4)',
            dark: 'var(--base-color-scale-gray-4)',
          },
        },
        fgColor: {
          rest: {
            value: 'var(--brand-color-text-onEmphasis)',
            dark: 'var(--brand-color-text-onEmphasis)',
          },
          disabled: {
            value: 'var(--base-color-scale-gray-2)',
            dark: 'var(--base-color-scale-gray-2)',
          },
        },
        shadow: {
          active: {
            value: 'inset 0px 1px 0px 0px var(--brand-Button-primary-borderColor-active)',
            dark: 'inset 0px 1px 0px 0px var(--brand-Button-primary-borderColor-active)',
          },
        },
      },
      secondary: {
        bgColor: {
          rest: {
            value: 'transparent',
            dark: 'transparent',
          },
          hover: {
            value: 'hsl(var(--base-color-scale-gray-4-hsl) / 20%)',
            dark: 'hsl(var(--base-color-scale-gray-4-hsl) / 20%)',
          },
          active: {
            value: 'hsl(var(--base-color-scale-gray-4-hsl) / 40%)',
            dark: 'hsl(var(--base-color-scale-gray-4-hsl) / 40%)',
          },
        },
        borderColor: {
          rest: {
            value: 'var(--brand-color-border-default)',
            dark: 'var(--brand-color-border-default)',
          },
          hover: {
            value: 'var(--base-color-scale-gray-9)',
            dark: 'var(--base-color-scale-white-0)',
          },
          active: {
            value: 'var(--base-color-scale-gray-9)',
            dark: 'var(--base-color-scale-white-0)',
          },
        },
        fgColor: {
          rest: {
            value: 'var(--brand-color-text-default)',
            dark: 'var(--brand-color-text-default)',
          },
          disabled: {
            value: 'var(--base-color-scale-gray-3)',
            dark: 'var(--base-color-scale-gray-4)',
          },
        },
      },
      subtle: {
        borderColor: {
          rest: {
            value: 'transparent',
            dark: 'transparent',
          },
          hover: {
            value: 'var(--base-color-scale-gray-9)',
            dark: 'var(--base-color-scale-white-0)',
          },
          active: {
            value: 'var(--base-color-scale-gray-9)',
            dark: 'var(--base-color-scale-white-0)',
          },
        },
        fgColor: {
          rest: {
            value: 'var(--brand-color-text-default)',
            dark: 'var(--brand-color-text-default)',
          },
          disabled: {
            value: 'var(--base-color-scale-gray-3)',
            dark: 'var(--base-color-scale-gray-4)',
          },
        },
      },
    },
  },
}
