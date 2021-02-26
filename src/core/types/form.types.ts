export interface TypedRenderProps {
  onChange: (...event: any[]) => void;
  onBlur: () => void;
  value: string;
  name?: string;
  ref?: React.MutableRefObject<any>;
}
