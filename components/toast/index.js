import { create } from '../common/create';

create({
  props: {
    show: Boolean,
    mask: Boolean,
    message: String,
    forbidClick: Boolean,
    zIndex: {
      type: Number,
      value: 10000
    },
    type: {
      type: String,
      value: 'text'
    },
    loadingType: {
      type: String,
      value: 'circular'
    },
    position: {
      type: String,
      value: 'middle'
    }
  },

  methods: {
    clear() {
      this.setData({
        show: false
      });
    }
  }
});
