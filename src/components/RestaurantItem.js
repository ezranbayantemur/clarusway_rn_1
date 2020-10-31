import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const RestaurantItem = ({ item }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{item.name}</Text>
        </View>
    )
}

export { RestaurantItem }

const styles = StyleSheet.create({
    container: {
        padding: 10,
        margin: 5,
        borderRadius: 5
    },
    text: {
        fontWeight: '200'
    }
})

// address: "Jl. Suryani Dalam no. 48, Bandung 40211 Indonesia"
// address_obj: {street1: "Jl. Suryani Dalam no. 48", street2: null, city: "Bandung", state: null, country: "Indonesia", …}
// ancestors: (4) [{…}, {…}, {…}, {…}]
// api_detail_url: "https://api.tripadvisor.com/api/internal/1.14/location/12034455"
// awards: []
// bearing: null
// category: {key: "restaurant", name: "Restaurant"}
// cuisine: []
// description: "Bandung is a place of culinary adventure, make sure you don't miss out meatballs (bakso) on your culinary list! Baso Sapi Cihampelas serves one of the best meatballs (bakso) in town. Meatballs are served with noodles and available for dine-in or takeaway. All food is Halal and hygienic."
// dietary_restrictions: []
// distance: null
// distance_string: null
// doubleclick_zone: "as.indonesia.java.bandung"
// email: "cihampelasbaso@gmail.com"
// establishment_types: []
// hours: {week_ranges: Array(7), timezone: "Asia/Jakarta"}
// is_candidate_for_contact_info_suppression: false
// is_closed: false
// is_jfy_enabled: false
// is_long_closed: false
// latitude: "-6.920376"
// location_id: "12034455"
// location_string: "Bandung, West Java, Java"
// longitude: "107.577644"
// name: "Baso Sapi Cihampelas"
// nearest_metro_station: []
// num_reviews: "12"
// open_now_text: "Closed Now"
// parent_display_name: "Bandung"
// phone: "+62 22 6001234"
// photo: {images: {…}, is_blessed: true, uploaded_date: "2019-02-01T23:17:26-0500", caption: "Macam-macam produk kami", id: "374470000", …}
// preferred_map_engine: "default"
// price: "$675 - $180,000"
// price_level: ""
// ranking: "#290 of 2,113 Restaurants in Bandung"
// ranking_category: "restaurant"
// ranking_denominator: "1881"
// ranking_geo: "Bandung"
// ranking_geo_id: "297704"
// ranking_position: "339"
// rating: "4.5"
// raw_ranking: "3.22346830368042"
// reviews: [{…}]
// subcategory: [{…}]
// timezone: "Asia/Jakarta"
// tripads_metadata: {restaurants_request_guid: "c8d3cb01-4c2a-4681-94b7-3648341b090d", ad_slot: "TA/Android/R/List/0a", tripads_selection_guid: "176d4f5c-1a0f-4c78-b3c2-33fd7f0a1cd4", payload_token: "dQKivf1TPb1HijoIABQCKzvzVbGxSZeKrI63p0WfghFK2UCqkB…nBIOo1fccVL89v3ybeWV2TVgfO9EeL8o3GQIH_dK8t_e0BQrw", location_id: "12034455", …}
// web_url: "https://www.tripadvisor.com/Restaurant_Review-g297704-d12034455-Reviews-Baso_Sapi_Cihampelas-Bandung_West_Java_Java.html"
// website: "http://baksocihampelas.com"
// write_review: "https://www.tripadvisor.com/UserReview-g297704-d12034455-Baso_Sapi_Cihampelas-Bandung_West_Java_Java.html"