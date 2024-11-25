'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import LogoBlackIcon from '@/public/images/platforms/veriwell-logo-black.png';
import LogoWhiteIcon from '@/public/images/platforms/veriwell-logo-white.png';

export const Logo = () => {
  const { resolvedTheme } = useTheme();
  return (
    <Link href="/">
      <Image src={resolvedTheme === 'dark' ? LogoWhiteIcon : LogoBlackIcon} alt="Logo" width={190} priority />
    </Link>
  );
};
