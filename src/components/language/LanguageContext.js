import React from 'react';
import '../../index.scss';

// Context allows app to share global language data so user can toggle between languages
// Context provider is located in App.js
const LanguageContext = React.createContext();

export default LanguageContext;
