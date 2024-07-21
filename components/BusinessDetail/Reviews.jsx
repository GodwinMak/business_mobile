import { View, Text, TextInput, Image, TouchableOpacity, ToastAndroid, FlatList } from 'react-native'
import React, {useState} from 'react'
import { Rating } from "react-native-ratings";
import { Colors } from '../../constants/Colors';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import {useUser} from "@clerk/clerk-expo"
import { db } from '../../configs/FirebaseConfig';
const Reviews = ({business}) =>{
    const [rating, setRating] = useState(0)
    const [input, setInput] = useState()

    const {user} = useUser();

    const onSubmit = async() =>{
      const docRef = doc(db, "BusinessList", business.id)
      await updateDoc(docRef,{
        reviews:arrayUnion({
          rating: rating,
          comment: input,
          userName: user?.fullName,
          userImage: user?.imageUrl,
          userEmail: user?.primaryEmailAddress?.emailAddress
        })
      })

      ToastAndroid.show("Comment Added Successfully", ToastAndroid.BOTTOM)
    } 
  return (
    <View style={{ padding: 20, backgroundColor: "#fff" }}>
      <Text style={{ fontFamily: "spaceMono", fontSize: 20, fontWeight: 800 }}>
        Reviews
      </Text>
      <View>
        <Rating
          showRating={false}
          startingValue={rating}
          onFinishRating={(r) => setRating(r)}
          style={{ paddingVertical: 10 }}
        />
        <TextInput
          numberOfLines={4}
          placeholder="Write your comment"
          style={{
            borderWidth: 1,
            padding: 10,
            borderRadius: 10,
            borderColor: Colors.GRAY,
            textAlignVertical: "top",
          }}
          onChangeText={(value) => setInput(value)}
        />
        <TouchableOpacity
          disabled={!input}
          onPress={() => onSubmit()}
          style={{
            padding: 10,
            backgroundColor: Colors.PRIMARY,
            borderRadius: 6,
            marginTop: 10,
          }}
        >
          <Text
            style={{
              fontFamily: "spaceMono",
              color: "#fff",
              textAlign: "center",
            }}
          >
            Submit
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        {business.reviews &&
          business?.reviews?.map((item, index) => (
            <View
              key={index}
              style={{
                display: "flex",
                flexDirection: "row",
                padding: 10,
                alignItems: "center",
                gap: 5,
                marginTop: 10,
                borderRadius: 15,
                borderColor: Colors.GRAY,
                borderWidth: 1,
              }}
            >
              <Image
                source={{ uri: item.userImage }}
                style={{ width: 50, height: 50, borderRadius: 99 }}
              />
              <View style={{ display: "flex", gap: 5 }}>
                <Text style={{ fontFamily: "spaceMono" }}>{item.userName}</Text>
                <Rating
                  imageSize={20}
                  startingValue={item.rating}
                  readonly={true}
                  style={{ alignItems: "flex-start" }}
                />
                <Text style={{ fontFamily: "spaceMono" }}>{item.comment}</Text>
              </View>
            </View>
          ))}
      </View>
    </View>
  );
}

const MemoizedReviews = React.memo(Reviews);
export default MemoizedReviews;