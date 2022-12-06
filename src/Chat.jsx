import { useRef } from 'react';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

function Chat() {
    const tawkMessengerRef = useRef();

    const handleMinimize = () => {
        tawkMessengerRef.current.minimize();
    };

    return (
       
        <div className="App">
            {/* <script type="text/javascript">
                var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
                (function(){
                const s1=document.createElement("script");
                var s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/638cd1f5b0d6371309d292e4/1gjf189i3';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
                })();
                </script> */}
            <button onClick={handleMinimize}> Minimize the Chat </button>

            <TawkMessengerReact
                propertyId="638cd1f5b0d6371309d292e4"
                widgetId="default"
                useRef={tawkMessengerRef}/>
        </div>
    );
}
export default Chat;


/* <!--Start of Tawk.to Script-->
<script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/638cd1f5b0d6371309d292e4/1gjf189i3';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
</script>
<!--End of Tawk.to Script--> */

/* import TawkMessengerReact from '@tawk.to/tawk-messenger-react';
function Chat() {
    return (
        <div className="App">
            <TawkMessengerReact
                propertyId="638cd1f5b0d6371309d292e4"
                widgetId="default"/>
        </div>
    );
}
export default Chat; */