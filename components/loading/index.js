import { create } from '../common/create';

create({
  props: {
    size: {
      type: String,
      value: '20px'
    },
    type: {
      type: String,
      value: 'circular'
    },
    color: {
      type: String,
      value: '#c9c9c9'
    }
  }
});
