class RootNavigation {
  rootNavigationRef = null;

  isRootNavigationRef = () => {
    const isRef = !!this.rootNavigationRef;

    if (!isRef) {
      __DEV__ && console.warn('There is no root-navigation ref');
    }

    return isRef;
  };

  setRootNavigationRef = (navigationRef) => {
    this.rootNavigationRef = navigationRef?.navigationRef;
  };

  navigate = (name, params) => this.isRootNavigationRef() && this.rootNavigationRef?.current.navigate(name, params);

  goBack = () => this.isRootNavigationRef() && this.rootNavigationRef?.current.goBack();
}

export const navigationRoot = new RootNavigation();
