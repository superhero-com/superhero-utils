export * from './index';
import { createButtonByDiv } from './index';

export const Button = {
  props: {
    size: {
      validator: (value) => ['icon', 'small', 'medium', 'large'].includes(value),
      default: undefined,
    },
    target: { type: [String, Number] },
  },
  mounted() {
    this.$watch(
      ({ size, target }) => ({ size, target }),
      ({ target, ...props }) => createButtonByDiv(this.$refs.button, target, props),
      { immediate: true },
    );
  },
  render(createElement) {
    return createElement('div', { ref: 'button' });
  },
};
