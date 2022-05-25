import Image from "next/image"
import { useSession } from "next-auth/client"
import {EmojiHappyIcon} from "@heroicons/react/outline"
import {CameraIcon, VideoCameraIcon} from "@heroicons/react/solid"
import {useRef} from "react"
import { db } from "../firebase"
import { collection, addDoc } from "firebase/firestore/lite"; 


function InputBox() {
    const [session] = useSession()
    const inputRef = useRef(null)

    function sendPost(e) {
        e.preventDefault()

        if(!inputRef.current.value) return

        addDoc(collection(db, 'posts'), {
            message: inputRef.current.value,
            name: session.user.name,
            email: session.user.email,
            image: session.user.image,
            timestamp: app.firestore.FieldValue.serverTimestamp(),
        })
        .then(() => {
            alert('Message submitted 👍' );
          })
          .catch((error) => {
            alert(error.message);
          });

        inputRef.current.value = ''
    }

    function addImageToPost() {

    }


    return (    

        <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 mt-6 font-medium">
            <div className="flex space-x-4 p-4 items-center">
                <Image 
                    className="rounded-full"
                    src={session.user.image}
                    width={40}
                    height={40}
                    layout="fixed"
                />
                <form className="flex flex-1">
                    <input type="text" 
                        placeholder={`What's on your mind, ${session.user.name}?`}
                        ref={inputRef}
                        className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
                     />
                     <button hidden type="submit" onClick={sendPost}></button>
                </form>
            </div>
            <div className="flex justify-evenly p-3 border-t">
                <div className="inputIcon">
                    <VideoCameraIcon className="h-7 text-red-500" />
                    <p className="text-xs sm:text-sm xl:text-base">
                        Live Video
                    </p>
                </div>
                <div className="inputIcon">
                    <CameraIcon className="h-7 text-green-400" />
                    <p className="text-xs sm:text-sm xl:text-base">
                        Photo/Video
                    </p>
                    <input type="file" hidden onChange={addImageToPost} />
                </div>
                <div className="inputIcon">
                    <EmojiHappyIcon className="h-7 text-yellow-300" />
                    <p className="text-xs sm:text-sm xl:text-base">
                        Feeling/Activity
                    </p>
                </div>
            </div>
        </div>
    )
}

export default InputBox