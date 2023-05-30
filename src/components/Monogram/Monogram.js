import { forwardRef, useId } from 'react';
import { classes } from 'utils/style';
import styles from './Monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;

  return (
    <svg
      aria-hidden
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="48.000000pt"
      height="48.000000pt"
      viewBox="0 0 48.000000 48.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,48.000000) scale(0.100000,-0.100000)"
        fill="#000000"
        stroke="none"
      >
        <path
          d="M0 240 l0 -240 178 0 179 0 61 62 62 61 0 179 0 178 -240 0 -240 0 0
-240z m152 79 c70 -19 87 -104 31 -149 -19 -14 -41 -20 -79 -20 l-54 0 0 83
c0 46 3 87 7 90 9 10 53 8 95 -4z m227 -75 c17 -47 31 -87 31 -90 0 -11 -41
-2 -46 11 -4 10 -20 15 -45 15 -28 0 -39 -4 -39 -15 0 -9 -9 -15 -25 -15 l-24
0 30 81 c37 101 35 99 64 99 20 0 27 -11 54 -86z"
        />
        <path
          d="M100 240 c0 -46 2 -50 23 -50 13 0 28 5 35 12 29 29 2 88 -39 88 -16
0 -19 -7 -19 -50z"
        />
        <path
          d="M312 252 c-10 -29 -9 -32 9 -32 20 0 23 12 10 44 -7 18 -9 16 -19
-12z"
        />
        {highlight && <rect className={styles.highlight} width="100%" height="100%" />}
      </g>
    </svg>
  );
});
