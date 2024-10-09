// Sample data for tourist destinations in Uttar Pradesh with descriptions
const destinations = {
    "agra": {
        places: [
            "Taj Mahal",
            "Agra Fort",
            "Fatehpur Sikri",
            "Itmad-ud-Daula",
            "Mehtab Bagh",
            "Akbar's Tomb",
            "Jahangir Mahal"
        ],
        descriptions: [
            "The Taj Mahal is a UNESCO World Heritage site and an iconic symbol of love, built by Mughal Emperor Shah Jahan in memory of his wife Mumtaz Mahal.",
            "Agra Fort is a historical fort with stunning architecture, which served as the main residence of the Mughal emperors until 1638.",
            "Fatehpur Sikri is a former Mughal city, known for its stunning architecture and the Buland Darwaza, the highest gateway in the world.",
            "Itmad-ud-Daula, often called the 'Baby Taj,' is a beautiful tomb made of white marble and is a precursor to the Taj Mahal.",
            "Mehtab Bagh offers stunning views of the Taj Mahal at sunset and is a great spot for photography.",
            "Akbar's Tomb in Sikandra is the final resting place of Mughal Emperor Akbar and showcases Indo-Islamic architecture.",
            "Jahangir Mahal is a beautiful palace built by Akbar for his favorite wife, showcasing Mughal architectural brilliance."
        ]
    },
    "lucknow": {
        places: [
            "Bara Imambara",
            "Chota Imambara",
            "Rumi Darwaza",
            "Hussainabad Clock Tower",
            "Gomti Riverfront",
            "Dilkusha Kothi",
            "La Martiniere College",
            "Begum Hazrat Mahal Park"
        ],
        descriptions: [
            "Bara Imambara is an architectural marvel built by Nawab Asaf-ud-Daula, known for its central hall, one of the largest in India.",
            "Chota Imambara is a beautiful monument, also known as the 'Imambara of the Shia', featuring intricate decorations and chandeliers.",
            "Rumi Darwaza, an imposing gateway, is a symbol of Awadhi architecture, designed to resemble the Turkish style.",
            "Hussainabad Clock Tower is one of the tallest clock towers in India, built in the 19th century, showcasing Indo-Saracenic architecture.",
            "Gomti Riverfront is a beautiful park along the Gomti River, offering recreational spaces, gardens, and views of the river.",
            "Dilkusha Kothi is a historical palace with lush gardens, perfect for a quiet retreat.",
            "La Martiniere College is an iconic educational institution known for its impressive architecture.",
            "Begum Hazrat Mahal Park is dedicated to the memory of the courageous Begum of Awadh, featuring beautiful gardens and monuments."
        ]
    },
    "varanasi": {
        places: [
            "Kashi Vishwanath Temple",
            "Dashashwamedh Ghat",
            "Sarnath",
            "Manikarnika Ghat",
            "Tulsi Manas Temple",
            "Kedar Ghat",
            "Assi Ghat",
            "Bharat Kala Bhavan",
            "Banaras Hindu University",
            "Ramnagar Fort"
        ],
        descriptions: [
            "Kashi Vishwanath Temple is one of the most revered temples dedicated to Lord Shiva, attracting millions of pilgrims each year.",
            "Dashashwamedh Ghat is a prominent ghat on the banks of the Ganges, famous for its Ganga Aarti ceremony held every evening.",
            "Sarnath is an important Buddhist pilgrimage site, where Lord Buddha delivered his first sermon after enlightenment.",
            "Manikarnika Ghat is one of the oldest ghats in Varanasi and a significant cremation site, symbolizing the cycle of life and death.",
            "Tulsi Manas Temple is dedicated to Lord Rama, built in the 1960s, featuring beautiful carvings and inscriptions from the Ramcharitmanas.",
            "Kedar Ghat is famous for its serene environment and beautiful temples along the Ganges.",
            "Assi Ghat is a popular ghat for tourists, known for its evening aarti and vibrant atmosphere.",
            "Bharat Kala Bhavan is an art and archaeological museum showcasing a rich collection of artifacts and paintings.",
            "Banaras Hindu University(BHU) is one of the oldest and largest residential universities in Asia, known for its beautiful campus.",
            "Ramnagar Fort is a historical fort located on the banks of the Ganges, known for its unique architecture and rich history."
        ]
    },
    "kanpur": {
        places: [
            "Allen Forest Zoo",
            "Moti Jheel",
            "Nana Rao Park",
            "Kanpur Memorial Church",
            "Phool Bagh",
            "ISKCON Kanpur",
            "Cawnpore Races",
            "Ganga Barrage"
        ],
        descriptions: [
            "Allen Forest Zoo is one of the largest zoos in North India, home to a variety of species, and set within a lush green environment.",
            "Moti Jheel is a popular lake and park, ideal for picnics and leisurely walks, offering boating facilities and scenic views.",
            "Nana Rao Park is a historical park commemorating the freedom struggle, featuring lush greenery and a peaceful environment.",
            "Kanpur Memorial Church, built in memory of soldiers who died in the 1857 uprising, showcases beautiful Gothic architecture.",
            "Phool Bagh is a picturesque garden with fountains and flowers, perfect for relaxation and family outings.",
            "ISKCON Kanpur is a temple dedicated to Lord Krishna, known for its spiritual activities and festivals.",
            "Cawnpore Races is a popular event for horse racing enthusiasts, offering entertainment and excitement.",
            "Ganga Barrage is a dam on the Ganges River, offering stunning views and recreational activities."
        ]
    },
    "mathura": {
        places: [
            "Krishna Janmabhoomi",
            "Vishram Ghat",
            "Govardhan Hill",
            "Dwarkadhish Temple",
            "Mathura Museum",
            "Brahma Sarovar",
            "Radha Kund",
            "Gita Mandir"
        ],
        descriptions: [
            "Krishna Janmabhoomi is the birthplace of Lord Krishna, featuring a temple complex that attracts numerous devotees and tourists.",
            "Vishram Ghat is a sacred bathing ghat on the Yamuna River, known for its tranquil atmosphere and religious significance.",
            "Govardhan Hill is a sacred hill associated with Lord Krishna, attracting pilgrims and offering beautiful views of the surrounding area.",
            "Dwarkadhish Temple is a renowned temple dedicated to Lord Krishna, showcasing intricate architecture and vibrant festivities.",
            "Mathura Museum houses a rich collection of artifacts and sculptures related to the history of Mathura and its religious significance.",
            "Brahma Sarovar is a sacred water body, considered holy by Hindus, where pilgrims come to take a dip.",
            "Radha Kund is a significant site for followers of Lord Krishna, known for its religious importance and beautiful surroundings.",
            "Gita Mandir is dedicated to the Bhagavad Gita and features beautiful carvings and inscriptions."
        ]
    },
    "gorakhpur": {
        places: [
            "Gorakhnath Temple",
            "Ramgarh Taal",
            "Buddh Park",
            "Geeta Press",
            "Gorakhpur Railway Station",
            "Gorakhpur Zoo",
            "Nawabganj Bird Sanctuary"
        ],
        descriptions: [
            "Gorakhnath Temple is a famous temple dedicated to Guru Gorakhnath, attracting numerous devotees and known for its beautiful architecture.",
            "Ramgarh Taal is a picturesque lake surrounded by gardens, ideal for picnics, boating, and enjoying the natural beauty.",
            "Buddh Park is a well-maintained park featuring a statue of Buddha, offering a serene environment for meditation and relaxation.",
            "Geeta Press is a prominent publisher of Hindu religious texts, known for its contribution to spreading spiritual literature.",
            "Gorakhpur Railway Station is an important railway hub with a historical significance and modern facilities.",
            "Gorakhpur Zoo is home to a variety of animals and is a popular destination for families.",
            "Nawabganj Bird Sanctuary is a popular bird sanctuary that is home to various migratory and resident bird species, perfect for birdwatching."
        ]
    },
    "noida": {
        places: [
            "Worlds of Wonder",
            "The Great India Place",
            "ISKCON Noida",
            "Noida Golf Course",
            "Okhla Bird Sanctuary",
            "Botanical Garden",
            "Sector 18 Market",
            "Film City",
            "St. Mary’s Church",
            "Shree Jagannath Temple"
        ],
        descriptions: [
            "Worlds of Wonder is a popular amusement park offering thrilling rides, water slides, and fun activities for families and children.",
            "The Great India Place is a large shopping mall featuring a variety of shops, restaurants, and entertainment options.",
            "ISKCON Noida is a beautiful temple dedicated to Lord Krishna, known for its peaceful ambiance and spiritual activities.",
            "Noida Golf Course is a lush green golf course offering recreational facilities and scenic views of the landscape.",
            "Okhla Bird Sanctuary is a haven for bird watchers, home to numerous species of migratory and resident birds, ideal for nature lovers.",
            "Botanical Garden is a well-maintained garden featuring a variety of plants, making it a peaceful retreat.",
            "Sector 18 Market is a bustling commercial area with shops, cafes, and entertainment options.",
            "Film City is a hub for the film industry in Noida, where various shoots and events take place.",
            "St. Mary’s Church is a historical church known for its beautiful architecture and serene atmosphere.",
            "Shree Jagannath Temple is a vibrant temple known for its intricate carvings and annual Rath Yatra festival."
        ]
    },
    "bareilly": {
        places: [
            "Alakhnath Temple",
            "Bareilly Fort",
            "Fun City",
            "Dargah of Ala Hazrat",
            "Nawabganj Bird Sanctuary",
            "Raja Jhangir Kachwaha Palace",
            "Lalitpur Kachori Gali",
            "Badaun Fort",
            "Nehru Garden",
            "Brahmapuri"
        ],
        descriptions: [
            "Alakhnath Temple is a revered temple dedicated to Lord Hanuman, known for its stunning architecture and peaceful surroundings.",
            "Bareilly Fort is a historical fort with rich heritage, offering a glimpse into the region's history and architecture.",
            "Fun City is an amusement park with various rides and attractions, making it a popular destination for families.",
            "Dargah of Ala Hazrat is a famous pilgrimage site, attracting visitors for its spiritual significance and beautiful architecture.",
            "Nawabganj Bird Sanctuary is a popular bird sanctuary that is home to various migratory and resident bird species, perfect for birdwatching.",
            "Raja Jhangir Kachwaha Palace is a historical site showcasing the architectural grandeur of its time.",
            "Lalitpur Kachori Gali is famous for its delicious local street food, offering a taste of Bareilly's culinary delights.",
            "Badaun Fort is an ancient fort offering historical insights and picturesque views.",
            "Nehru Garden is a beautiful park with lush greenery, ideal for family outings.",
            "Brahmapuri is a local area known for its cultural significance and local festivals."
        ]
    },
    "allahabad": {
        places: [
            "Khusro Bagh",
            "Allahabad Fort",
            "Allahabad Museum",
            "Jawahar Planetarium",
            "All Saints Cathedral (Patthar Girja)",
            "Anand Bhavan",
            "Swaraj Bhawan",
            "Triveni Sangam",
            "Nagvasuki Temple",
            "Alopi Devi Mandir"
        ],
        descriptions: [
            "Khusro Bagh is a large walled garden containing the tombs of Khusrau Mirza (son of Emperor Jahangir), his mother, and his sister. The tombs are fine examples of Mughal architecture and the garden offers a peaceful environment for visitors.",
            "Built by Emperor Akbar in 1583, Allahabad Fort is a majestic structure that stands along the banks of the Yamuna River. It is known for its massive walls, beautiful architecture, and the famous Ashoka Pillar located inside the fort. While a part of it is used by the Indian Army, some areas are open to tourists.",
            "Allahabad Museum is one of the prominent museums in India, showcasing a rich collection of sculptures, artifacts, and historical documents. The museum offers insights into the cultural and political history of India, with sections dedicated to archaeology, natural history, and paintings.",
            "Located next to Anand Bhavan, Jawahar Planetarium offers a glimpse into the world of astronomy. It features shows on celestial bodies, space, and the universe, making it a great spot for kids and space enthusiasts.",
            "All Saints Cathedral is a Gothic-style church built in the 19th century by the British. It is also known as 'Patthar Girja' (Stone Church) due to its stunning sandstone structure. The cathedral is one of the finest examples of colonial-era architecture in India.",
            "Anand Bhavan is the ancestral home of the Nehru family, which has now been converted into a museum. The museum displays memorabilia of the Nehru-Gandhi family, showcasing their role in India's independence movement. It also has Jawaharlal Nehru's personal library and other artifacts from the time.",
            "Adjacent to Anand Bhavan, Swaraj Bhawan is another mansion owned by the Nehru family. This building was once the headquarters of the Indian National Congress and now serves as a museum. It is a great place to learn about the Indian freedom struggle.",
            "Triveni Sangam is the confluence of three rivers: the Ganges, Yamuna, and the mythical Saraswati. It is a sacred spot for Hindus and a popular destination during the Kumbh Mela. Pilgrims come here to take a holy dip, believing it cleanses them of their sins.",
            "Located near the banks of the Ganges, Nagvasuki Temple is dedicated to Vasuki, the king of serpents in Hindu mythology. It is particularly crowded during Nag Panchami when devotees flock to offer prayers.",
            "Alopi Devi Mandir is a unique temple dedicated to the goddess Alopi Devi, believed to be a form of Goddess Sati. Unlike other temples, there is no deity here, but rather a wooden platform, making it an interesting spot for devotees and tourists alike."
        ]
    },
    // Add more destinations similarly
};



// Function to display suggestions
function suggestPlaces() {
    const input = document.getElementById("search").value.toLowerCase();
    const suggestions = document.getElementById("suggestions");
    suggestions.innerHTML = ''; // Clear previous results

    if (destinations[input]) {
        suggestions.style.display = 'block'; // Show the suggestions box
        suggestions.innerHTML = `<h2>Suggested Places in ${input.charAt(0).toUpperCase() + input.slice(1)}:</h2><ul>`;

        destinations[input].places.forEach((place, index) => {
            suggestions.innerHTML += `
                <li><strong>${place}:</strong> ${destinations[input].descriptions[index]}</li>
            `;
        });

        suggestions.innerHTML += `</ul>`;
    } else {
        suggestions.style.display = 'block'; // Show "no suggestions" message
        suggestions.innerHTML = `<h2>No suggestions available for "${input}".</h2>`;
    }
}

// Event listener for Search button
document.getElementById("search-btn").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent button from submitting form
    suggestPlaces(); // Call the search function
});

// Event listener for Enter key
document.getElementById("search").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevent default Enter key behavior
        suggestPlaces(); // Call the search function
    }
});