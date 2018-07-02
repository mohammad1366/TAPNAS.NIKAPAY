import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'پیشخوان',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'مدیریت مشترکین',
    icon: 'nb-person',
    link: '/pages/ui-features',
  },
  {
    title: 'مدیریت کارت ها',
    icon: 'nb-square-outline',
    link: '/pages/card-manage/smart-table',
  },
  {
    title: 'مدیریت دستگاه ها',
    icon: 'nb-audio',
    link: '/pages/ui-features',
  },
  {
    title: 'مدیریت پذیرندگان',
    icon: 'nb-gear',
    link: '/pages/ui-features',
  },
  {
    title: 'گزارش',
    icon: 'nb-bar-chart',
    children: [
      {
        title: 'ریز تراکنش',
        link: '/pages/transactionReport/transaction-table',
      },
      {
        title: 'کارکرد دستگاه',
        link: '/pages/charts/chartjs',
      },
      {
        title: 'عملکرد مشترکین',
        link: '/pages/charts/d3',
      },
      {
        title: 'مشاهده روی نقشه',
        link: '/pages/charts/d3',
      },
      {
        title: 'پنل شارژ GPRS',
        link: '/pages/charts/d3',
      },
    ],
  },
];
