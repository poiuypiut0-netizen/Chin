/* إعدادات التطبيق: عدّل هذا الملف فقط */
window.APP_CONFIG = {
  /* من Firebase: Project settings ثم Your apps ثم Web app ثم Config */
  firebase: {
    apiKey: '',
    authDomain: 'gini-4debc.firebaseapp.com',
    databaseURL: 'https://gini-4debc-default-rtdb.firebaseio.com',
    projectId: 'gini-4debc',
    appId: ''
  },
  /* AdMob: أثناء التجربة خلّيها true (إعلانات تجريبية). قبل النشر خلّيها false وحط رقم وحدتك */
  admob: {
    testing: true,
    rewardedId: 'ca-app-pub-3940256099942544/5224354917'
  },
  /* أرقام المنتجات اللي تنعمل بـ Play Console (نوع: منتج لمرة وحدة) */
  products: { arab: 'pack_arab', islamic: 'pack_islamic' },
  wheelPerDay: 5,
  simulateAds: true
};
