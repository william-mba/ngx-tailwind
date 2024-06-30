
export type Margin = Partial<{
  x: MarginX
  y: MarginY
  top: MarginTop
  right: MarginRight
  bottom: MarginBottom
  left: MarginLeft
}> | MarginSize | MarginX | MarginY | MarginTop | MarginRight | MarginBottom | MarginLeft;


export type MarginRight =
  | 'mr-0'
  | 'mr-1'
  | 'mr-1.5'
  | 'mr-2'
  | 'mr-2.5'
  | 'mr-3'
  | 'mr-3.5'
  | 'mr-4'
  | 'mr-5'
  | 'mr-6'
  | 'mr-7'
  | 'mr-8'
  | 'mr-9'
  | 'mr-10'
  | 'mr-11'
  | 'mr-12'
  | 'mr-14'
  | 'mr-16'
  | 'mr-20'
  | 'mr-24'
  | 'mr-28'
  | 'mr-32'
  | 'mr-36'
  | 'mr-40'
  | 'mr-48'
  | 'mr-56'
  | 'mr-64'
  | 'mr-72'
  | 'mr-96'
  | 'mr-auto'

export type MarginLeft =
  | 'ml-0'
  | 'ml-1'
  | 'ml-1.5'
  | 'ml-2'
  | 'ml-2.5'
  | 'ml-3'
  | 'sm:ml-3'
  | 'ml-3.5'
  | 'ml-4'
  | 'sm:ml-4'
  | 'ml-5'
  | 'ml-6'
  | 'ml-7'
  | 'ml-8'
  | 'ml-9'
  | 'ml-10'
  | 'ml-11'
  | 'ml-12'
  | 'ml-14'
  | 'ml-16'
  | 'ml-20'
  | 'ml-24'
  | 'ml-28'
  | 'ml-32'
  | 'ml-36'
  | 'ml-40'
  | 'ml-48'
  | 'ml-56'
  | 'ml-64'
  | 'ml-72'
  | 'ml-96'
  | 'ml-auto'

export type MarginTop =
  | 'mt-0'
  | 'sm:mt-0'
  | 'mt-1'
  | 'mt-1.5'
  | 'mt-2'
  | 'mt-2.5'
  | 'mt-3'
  | 'mt-3.5'
  | 'mt-4'
  | 'mt-5'
  | 'mt-6'
  | 'mt-7'
  | 'mt-8'
  | 'mt-9'
  | 'mt-10'
  | 'mt-11'
  | 'mt-12'
  | 'mt-14'
  | 'mt-16'
  | 'mt-20'
  | 'mt-24'
  | 'mt-28'
  | 'mt-32'
  | 'mt-36'
  | 'mt-40'
  | 'mt-48'
  | 'mt-56'
  | 'mt-64'
  | 'mt-72'
  | 'mt-96'
  | 'mt-auto'

export type MarginBottom =
  | 'mb-0'
  | 'mb-1'
  | 'mb-1.5'
  | 'mb-2'
  | 'mb-2.5'
  | 'mb-3'
  | 'mb-3.5'
  | 'mb-4'
  | 'mb-5'
  | 'mb-6'
  | 'mb-7'
  | 'mb-8'
  | 'mb-9'
  | 'mb-10'
  | 'mb-11'
  | 'mb-12'
  | 'mb-14'
  | 'mb-16'
  | 'mb-20'
  | 'mb-24'
  | 'mb-28'
  | 'mb-32'
  | 'mb-36'
  | 'mb-40'
  | 'mb-48'
  | 'mb-56'
  | 'mb-64'
  | 'mb-72'
  | 'mb-96'
  | 'mb-auto'

export type MarginX =
  | 'mx-0'
  | 'sm:mx-0'
  | 'mx-1'
  | 'mx-1.5'
  | 'mx-2'
  | 'mx-2.5'
  | 'mx-3'
  | 'mx-3.5'
  | 'mx-4'
  | 'mx-5'
  | 'mx-6'
  | 'mx-7'
  | 'mx-8'
  | 'mx-9'
  | 'mx-10'
  | 'mx-11'
  | 'mx-12'
  | 'mx-14'
  | 'mx-16'
  | 'mx-20'
  | 'mx-24'
  | 'mx-28'
  | 'mx-32'
  | 'mx-36'
  | 'mx-40'
  | 'mx-48'
  | 'mx-56'
  | 'mx-64'
  | 'mx-72'
  | 'mx-96'
  | 'mx-auto'

export type MarginY =
  | 'my-0'
  | 'my-1'
  | 'my-1.5'
  | 'my-2'
  | 'my-2.5'
  | 'my-3'
  | 'my-3.5'
  | 'my-4'
  | 'my-5'
  | 'my-6'
  | 'my-7'
  | 'my-8'
  | 'sm:my-8'
  | 'my-9'
  | 'my-10'
  | 'my-11'
  | 'my-12'
  | 'my-14'
  | 'my-16'
  | 'my-20'
  | 'my-24'
  | 'my-28'
  | 'my-32'
  | 'my-36'
  | 'my-40'
  | 'my-48'
  | 'my-56'
  | 'my-64'
  | 'my-72'
  | 'my-96'
  | 'my-auto'

export type MarginSize =
  | 'm-0'
  | 'm-1'
  | 'm-1.5'
  | 'm-2'
  | 'm-2.5'
  | 'm-3'
  | 'm-3.5'
  | 'm-4'
  | 'm-5'
  | 'm-6'
  | 'm-7'
  | 'm-8'
  | 'm-9'
  | 'm-10'
  | 'm-11'
  | 'm-12'
  | 'm-14'
  | 'm-16'
  | 'm-20'
  | 'm-24'
  | 'm-28'
  | 'm-32'
  | 'm-36'
  | 'm-40'
  | 'm-48'
  | 'm-56'
  | 'm-64'
  | 'm-72'
  | 'm-96'
  | 'm-auto'
