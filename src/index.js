import './global.scss';
import { default as createButton } from './button';
import { default as ensurePayed } from './paywall';

Object.assign(createButton, { ensurePayed });

export default createButton;
