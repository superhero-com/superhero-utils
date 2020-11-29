export * from './index';
import { createButtonByDiv } from './index';

export const Button = {
  props: {
    size: {
      validator: value => ['icon', 'small', 'medium', 'large'].includes(value),
      default: undefined,
    },
    url: { type: String, default: undefined },
    account: { type: String, default: undefined },
  },
  mounted() {
    this.$watch(
      ({ size, url, account }) => ({ size, url, account }),
      (props) => createButtonByDiv(this.$refs.button, props),
      { immediate: true },
    );
  },
  render(createElement) {
    return createElement('div', { ref: 'button' });
  },
};
