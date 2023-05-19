/* eslint-disable prettier/prettier */
interface IButtonProps {
  title: string
}

export function Button(props: IButtonProps) {
  return <p>{props.title}</p>
}
