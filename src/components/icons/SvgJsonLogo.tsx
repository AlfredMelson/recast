import RootSvg, { RootSvgProps } from './RootSvg'

export default function SvgJsonLogo(props: RootSvgProps) {
  return (
    <RootSvg
      xmlns='http://www.w3.org/2000/svg'
      width={32}
      height={32}
      viewBox='0 0 32 32'
      fill='none'
      {...props}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M31.51,15.77H30.07a.38.38,0,0,0-.37.37V19.2l-2.44-3.28a.38.38,0,0,0-.3-.15H25.74a.38.38,0,0,0-.38.37v2.28a3.22,3.22,0,0,0-3.43-2.65,3.33,3.33,0,0,0-3.54,3.63,1.48,1.48,0,0,0,0,.21,2.32,2.32,0,0,0-1.79-1.05l-.92-.16h0v-.9a.74.74,0,0,1,.72.4.43.43,0,0,0,.36.27H18.5V18c0-1.39-1.06-2.23-2.82-2.26V6a.38.38,0,0,0-.38-.38H10A.38.38,0,0,0,9.64,6V18.58c0,1-.31,2.25-1.82,2.25a1.94,1.94,0,0,1-2-2.11.36.36,0,0,0-.37-.36h-5a.37.37,0,0,0-.38.38c.12,4.42,3.13,7.17,7.85,7.17,3.08,0,5.36-1,6.64-3a5.53,5.53,0,0,0,1,.09c1.76,0,2.94-.83,3.07-2.13A3.25,3.25,0,0,0,21.93,23a3.22,3.22,0,0,0,3.43-2.64v2.26a.39.39,0,0,0,.38.38h1.44a.38.38,0,0,0,.37-.38V19.53L30,22.87a.4.4,0,0,0,.3.15h1.2a.37.37,0,0,0,.38-.38v-6.5A.37.37,0,0,0,31.51,15.77Zm-16.08.12h.23v1.47h-.12c-.43,0-.68.25-.68.54s.21.45.68.57l.12,0v.12a8.85,8.85,0,0,1-.11,1.49c0,.05,0,.09,0,.13l-.1,0v0l-.13,0-.61-.11c-1.24-.21-1.92-.92-1.92-2C12.77,16.79,13.88,15.93,15.43,15.89Zm-.22,5.58a6.6,6.6,0,0,1-.56,1.2l-.07.11-.09,0s0,0,0,0a.4.4,0,0,1-.13,0,2,2,0,0,1-1.68-2h2a.68.68,0,0,0,.48.52l.12.05Zm.4-.18a1.47,1.47,0,0,1-.31,0,6.65,6.65,0,0,0,.22-.88h0c.74.14.87.26.87.46S16.1,21.29,15.61,21.29Zm6.32-.11c-.76,0-1.25-.7-1.25-1.78s.49-1.8,1.25-1.8,1.26.71,1.26,1.8S22.69,21.18,21.93,21.18Z'
        fill='#007FFF'
      />
    </RootSvg>
  )
}
