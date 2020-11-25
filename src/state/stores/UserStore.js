import { Store } from '../common/store/store';
import { Registry } from '../common/store/registry';

export const SIGN_UP = 'SIGN_UP';

const UserStore = new Store('user', {
  data: {
    user: null,
  },
  options: {
    shouldInitFromState: true,
    stateKey: 'user',
  },
  reducers: [
    {
      type: SIGN_UP,
      action(state, payload) {
        const { user } = payload;
        return { ...state, user };
      },
    },
  ],
});

Registry.addStore(UserStore);

export { UserStore };
