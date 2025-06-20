import { IconBaseProps } from 'react-icons';

declare module 'react-icons/fa' {
  export interface FaProps extends IconBaseProps {
    className?: string;
  }
  
  export const FaTwitter: React.FC<FaProps>;
  export const FaInstagram: React.FC<FaProps>;
  export const FaGlobe: React.FC<FaProps>;
  export const FaHeart: React.FC<FaProps>;
  export const FaRegHeart: React.FC<FaProps>;
  export const FaUserCircle: React.FC<FaProps>;
  export const FaThumbsUp: React.FC<FaProps>;
  export const FaThumbsDown: React.FC<FaProps>;
  export const FaRegThumbsUp: React.FC<FaProps>;
  export const FaRegThumbsDown: React.FC<FaProps>;
}
