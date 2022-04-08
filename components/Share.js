import Content from './frontaid.content.json'
import ShareIcon from './icons/ShareIcon';
import TelegramIcon from './icons/TelegramIcon'
export default function Share() {
    const facebook = e => {
        e.preventDefault()
        window.open('https://www.facebook.com/sharer/sharer.php?u=' 
        + encodeURIComponent(window.location.href) 
        + '&t=' 
        + encodeURIComponent(window.location.href)); 
        return false;
    }
    const telegram = e => {
        e.preventDefault()
        window.open('https://t.me/share/url?url=' 
        + encodeURIComponent(window.location.origin) 
        + '&text=' 
        + encodeURIComponent(Content.description)); 
        return false;
    }

    return (
        <div className='flex justify-center ml-2'>
            <button onClick={facebook} >
                <ShareIcon/>
            </button>
            <button onClick={telegram}>
                <TelegramIcon/>
            </button>
        </div>
    )
}