import {IconButtonProps} from 'react-native-vector-icons/Icon';

export type IconName =
  | 'Apartment'
  | 'Arrow-Down'
  | 'Arrow-Left'
  | 'Arrow-Right'
  | 'Arrow-Up'
  | 'Bar'
  | 'Bell'
  | 'Book'
  | 'Bookmark'
  | 'Calendar-1'
  | 'Call'
  | 'Chat'
  | 'Checklist'
  | 'Chevron-Down'
  | 'Chevron-Left'
  | 'Chevron-Right'
  | 'Chevron-Up'
  | 'Clock'
  | 'Close'
  | 'Copy'
  | 'Credit-Card'
  | 'Customer-Service'
  | 'Dark-Light'
  | 'Delivery'
  | 'Direction'
  | 'Drive-Thru'
  | 'Edit'
  | 'Eye-Close'
  | 'Flag'
  | 'Globe'
  | 'Histori'
  | 'Info'
  | 'Invoice-1'
  | 'Kantor'
  | 'Loading'
  | 'Location'
  | 'Lock-Shield'
  | 'Lock'
  | 'Log-Out'
  | 'Love'
  | 'Message'
  | 'Minus'
  | 'Network-Not-Found'
  | 'Notes'
  | 'Notifikasi'
  | 'Outlet'
  | 'Pick-Up'
  | 'Placeholder'
  | 'Plus'
  | 'Promo'
  | 'QR-Code'
  | 'Question'
  | 'Receipt'
  | 'Referral'
  | 'Rumah'
  | 'Search'
  | 'Shopping-bag-filled'
  | 'Shopping-bag-line'
  | 'SMS-Light'
  | 'SMS-Solid'
  | 'Star'
  | 'Target-Location'
  | 'Timer-Load'
  | 'Trash'
  | 'User-1'
  | 'User-2'
  | 'View-More'
  | 'Voucher'
  | 'Wallet'
  | 'Whatsapp';

export interface IconProps extends IconButtonProps {
  name: IconName;
}
