
import './TitlePage.css';
export default function TitlePage({ title, classStyle }: { title: string; classStyle: string }) {
  return (
    
    <div className={classStyle}>{title}</div>
  )

}
