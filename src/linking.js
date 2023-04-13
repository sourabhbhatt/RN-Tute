export const linking = {
  prefixes: ['gf-com://', 'https://gf.com'],
  config: {
    screens: {
      Auth: {
        screens: {
          SignIn: {path: 'signin'},
          Signup: {path: 'signup'},
        },
      },
      DrawerNavigator: {
        screens: {
          BottomNavigator: {
            screens: {
              HomeTab: {
                screens: {
                  Home: {path: 'home'},
                  Details: {
                    path: 'Details',
                    parse: {
                      message: message => `${message}`,
                    },
                  },
                },
              },
              ProfileTab: {
                screens: {
                  Profile: {path: 'profile'},
                },
              },
            },
          },
        },
      },
    },
  },
};
