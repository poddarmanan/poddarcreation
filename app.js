// Enhanced fabric data with 50+ colors each and detailed color information
const fabricData = [
    {
        id: "fabric-001",
        name: "PC/PC 8.800 kg 41\"+",
        category: "cotton",
        material: "Polycotton Blend",
        weight: "8.800 kg",
        width: "41 inches+", 
        colors: ["#DC143C", "#0077BE", "#50C878", "#FFD700", "#6A0DAD"],
        price: "₹45-65 per meter",
        features: ["DURABLE", "EASY-CARE", "COLOR-FAST", "VERSATILE"],
        description: "Premium polycotton blend fabric with excellent durability and color retention. Perfect for versatile garment applications.",
        rating: 4.8,
        reviews: 156,
        availability: "In Stock",
        colorCount: 50,
        allColors: [
            { id: "pc-red-01", name: "Deep Crimson Red", hex: "#DC143C", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "pc-red-02", name: "Cherry Red", hex: "#D2001B", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "pc-red-03", name: "Burgundy Wine", hex: "#722F37", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "pc-pink-01", name: "Rose Pink", hex: "#FF007F", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "pc-pink-02", name: "Coral Pink", hex: "#F88379", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "pc-blue-01", name: "Ocean Navy Blue", hex: "#0077BE", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "pc-blue-02", name: "Sky Blue", hex: "#87CEEB", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "pc-blue-03", name: "Powder Blue", hex: "#B0E0E6", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "pc-blue-04", name: "Teal Blue", hex: "#008B8B", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "pc-blue-05", name: "Midnight Blue", hex: "#191970", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "pc-green-01", name: "Forest Green", hex: "#228B22", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "pc-green-02", name: "Emerald Green", hex: "#50C878", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "pc-green-03", name: "Lime Green", hex: "#32CD32", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "pc-green-04", name: "Olive Green", hex: "#808000", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "pc-green-05", name: "Mint Green", hex: "#98FB98", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "pc-purple-01", name: "Royal Purple", hex: "#6A0DAD", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "pc-purple-02", name: "Lavender Purple", hex: "#E6E6FA", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "pc-purple-03", name: "Plum Purple", hex: "#DDA0DD", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "pc-purple-04", name: "Violet Purple", hex: "#8A2BE2", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "pc-purple-05", name: "Mauve Purple", hex: "#E0B0FF", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "pc-orange-01", name: "Sunset Orange", hex: "#FF4500", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "pc-orange-02", name: "Tangerine Orange", hex: "#FF8C00", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "pc-orange-03", name: "Peach Orange", hex: "#FFCBA4", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "pc-orange-04", name: "Burnt Orange", hex: "#CC5500", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "pc-orange-05", name: "Amber Orange", hex: "#FFBF00", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "pc-yellow-01", name: "Golden Yellow", hex: "#FFD700", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "pc-yellow-02", name: "Lemon Yellow", hex: "#FFFF00", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "pc-yellow-03", name: "Cream Yellow", hex: "#FFFACD", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "pc-yellow-04", name: "Mustard Yellow", hex: "#FFDB58", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "pc-yellow-05", name: "Canary Yellow", hex: "#FFEF00", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "pc-white-01", name: "Pure White", hex: "#FFFFFF", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "pc-white-02", name: "Off White", hex: "#FAF0E6", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "pc-white-03", name: "Ivory White", hex: "#FFFFF0", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "pc-white-04", name: "Pearl White", hex: "#EAE0C8", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "pc-white-05", name: "Snow White", hex: "#FFFAFA", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "pc-black-01", name: "Jet Black", hex: "#000000", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "pc-black-02", name: "Charcoal Black", hex: "#36454F", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "pc-black-03", name: "Slate Black", hex: "#2F4F4F", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "pc-black-04", name: "Ebony Black", hex: "#555D50", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "pc-black-05", name: "Midnight Black", hex: "#0C0C0C", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "pc-gray-01", name: "Silver Gray", hex: "#C0C0C0", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "pc-gray-02", name: "Steel Gray", hex: "#71797E", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "pc-gray-03", name: "Ash Gray", hex: "#B2BEB5", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "pc-gray-04", name: "Dove Gray", hex: "#6D6C6C", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "pc-gray-05", name: "Smoke Gray", hex: "#848884", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "pc-brown-01", name: "Chocolate Brown", hex: "#7B3F00", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "pc-brown-02", name: "Coffee Brown", hex: "#6F4E37", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "pc-brown-03", name: "Tan Brown", hex: "#D2B48C", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "pc-brown-04", name: "Camel Brown", hex: "#C19A6B", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "pc-brown-05", name: "Khaki Brown", hex: "#C3B091", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "pc-beige-01", name: "Beige Nude", hex: "#F5F5DC", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "pc-beige-02", name: "Sand Beige", hex: "#C2B280", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" }
        ]
    },
    {
        id: "fabric-002",
        name: "Cambric Cotton 9.000 kg 42\"+",
        category: "cotton",
        material: "100% Cotton",
        weight: "9.000 kg",
        width: "42 inches+",
        colors: ["#FFFFFF", "#F0F0F0", "#E6E6FA", "#FFF8DC", "#F5F5DC"],
        price: "₹50-70 per meter",
        features: ["SOFT", "BREATHABLE", "ANTI-SHRINK", "PREMIUM"],
        description: "High-quality cambric cotton with superior softness and breathability. Ideal for premium garments.",
        rating: 4.9,
        reviews: 203,
        availability: "In Stock",
        colorCount: 50,
        allColors: [
            { id: "cambric-white-01", name: "Pure White", hex: "#FFFFFF", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "cambric-white-02", name: "Snow White", hex: "#FFFAFA", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "cambric-white-03", name: "Ivory White", hex: "#FFFFF0", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "cambric-white-04", name: "Pearl White", hex: "#EAE0C8", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "cambric-white-05", name: "Off White", hex: "#FAF0E6", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "cambric-cream-01", name: "Cream Ivory", hex: "#F0F0F0", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "cambric-cream-02", name: "Vanilla Cream", hex: "#F3E5AB", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "cambric-cream-03", name: "Butter Cream", hex: "#FFFDD0", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "cambric-cream-04", name: "Champagne Cream", hex: "#F7E7CE", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "cambric-cream-05", name: "Milk Cream", hex: "#FEFCFF", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "cambric-lavender-01", name: "Soft Lavender", hex: "#E6E6FA", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "cambric-lavender-02", name: "Pale Lavender", hex: "#DCD0FF", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "cambric-lavender-03", name: "Light Lavender", hex: "#B19CD9", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "cambric-lavender-04", name: "Misty Lavender", hex: "#E6E6FA", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "cambric-lavender-05", name: "Baby Lavender", hex: "#E6E6FA", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "cambric-pink-01", name: "Pastel Pink", hex: "#FFD1DC", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "cambric-pink-02", name: "Blush Pink", hex: "#DE5D83", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "cambric-pink-03", name: "Rose Pink", hex: "#FF007F", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "cambric-pink-04", name: "Baby Pink", hex: "#F4C2C2", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "cambric-pink-05", name: "Cotton Pink", hex: "#FFBCD9", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "cambric-blue-01", name: "Sky Blue", hex: "#87CEEB", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "cambric-blue-02", name: "Baby Blue", hex: "#89CFF0", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "cambric-blue-03", name: "Powder Blue", hex: "#B0E0E6", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "cambric-blue-04", name: "Ice Blue", hex: "#AFDCEC", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "cambric-blue-05", name: "Pale Blue", hex: "#AFEEEE", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "cambric-green-01", name: "Mint Green", hex: "#98FB98", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "cambric-green-02", name: "Pale Green", hex: "#98FB98", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "cambric-green-03", name: "Sage Green", hex: "#87A96B", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "cambric-green-04", name: "Light Green", hex: "#90EE90", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "cambric-green-05", name: "Seafoam Green", hex: "#93E9BE", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "cambric-yellow-01", name: "Lemon Yellow", hex: "#FFFF00", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "cambric-yellow-02", name: "Pale Yellow", hex: "#FFFF99", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "cambric-yellow-03", name: "Butter Yellow", hex: "#FFFD74", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "cambric-yellow-04", name: "Cream Yellow", hex: "#FFFACD", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "cambric-yellow-05", name: "Vanilla Yellow", hex: "#F3E5AB", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "cambric-gray-01", name: "Light Gray", hex: "#D3D3D3", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "cambric-gray-02", name: "Silver Gray", hex: "#C0C0C0", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "cambric-gray-03", name: "Ash Gray", hex: "#B2BEB5", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "cambric-gray-04", name: "Pearl Gray", hex: "#E8E5E5", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "cambric-gray-05", name: "Dove Gray", hex: "#6D6C6C", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "cambric-peach-01", name: "Peach Cream", hex: "#FFCBA4", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "cambric-peach-02", name: "Apricot Cream", hex: "#FBCEB1", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "cambric-peach-03", name: "Salmon Pink", hex: "#FF91A4", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "cambric-peach-04", name: "Coral Cream", hex: "#F88379", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "cambric-peach-05", name: "Rose Cream", hex: "#F4C2C2", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "cambric-purple-01", name: "Lilac Purple", hex: "#C8A2C8", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "cambric-purple-02", name: "Mauve Purple", hex: "#E0B0FF", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "cambric-purple-03", name: "Orchid Purple", hex: "#DA70D6", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "cambric-purple-04", name: "Violet Cream", hex: "#EE82EE", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" },
            { id: "cambric-purple-05", name: "Plum Cream", hex: "#DDA0DD", photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], video: "video1.mp4" }
        ]
    }
];

// Add more fabric data with complete 50 colors for all 11 fabrics
fabricData.push(
    {
        id: "fabric-003",
        name: "Jaam Cotton 11.000 kg 42\"+",
        category: "cotton",
        material: "100% Cotton",
        weight: "11.000 kg",
        width: "42 inches+",
        colors: ["#8B4513", "#A0522D", "#D2691E", "#DEB887", "#F4A460"],
        price: "₹55-75 per meter",
        features: ["THICK", "DURABLE", "COLOR-FAST", "PREMIUM"],
        description: "Heavy-weight Jaam cotton fabric with excellent thickness and durability. Perfect for structured garments.",
        rating: 4.7,
        reviews: 128,
        availability: "In Stock",
        colorCount: 50,
        allColors: Array.from({length: 50}, (_, i) => ({
            id: `jaam-color-${i+1}`,
            name: `Jaam Color ${i+1}`,
            hex: `#${Math.floor(Math.random()*16777215).toString(16).padStart(6, '0')}`,
            photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"],
            video: "video1.mp4"
        }))
    },
    {
        id: "fabric-004",
        name: "Jaam Cotton 12.500 kg 44\"+",
        category: "cotton",
        material: "100% Cotton",
        weight: "12.500 kg",
        width: "44 inches+",
        colors: ["#654321", "#8B7765", "#A0522D", "#DEB887", "#F5DEB3"],
        price: "₹60-80 per meter",
        features: ["EXTRA-THICK", "DURABLE", "WIDE-WIDTH", "PREMIUM"],
        description: "Extra heavy-weight Jaam cotton with wider width for premium applications.",
        rating: 4.9,
        reviews: 89,
        availability: "Limited Stock",
        colorCount: 50,
        allColors: Array.from({length: 50}, (_, i) => ({
            id: `jaam44-color-${i+1}`,
            name: `Jaam 44" Color ${i+1}`,
            hex: `#${Math.floor(Math.random()*16777215).toString(16).padStart(6, '0')}`,
            photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"],
            video: "video1.mp4"
        }))
    },
    {
        id: "fabric-005",
        name: "Rayon 14 kg 42\"+",
        category: "rayon",
        material: "100% Rayon",
        weight: "14 kg",
        width: "42 inches+",
        colors: ["#FF1493", "#4169E1", "#32CD32", "#FFD700", "#9370DB"],
        price: "₹40-60 per meter",
        features: ["SMOOTH", "FLOWING", "COLOR-RICH", "ELEGANT"],
        description: "Premium rayon fabric with smooth texture and excellent drape.",
        rating: 4.6,
        reviews: 174,
        availability: "In Stock",
        colorCount: 50,
        allColors: Array.from({length: 50}, (_, i) => ({
            id: `rayon14-color-${i+1}`,
            name: `Rayon 14kg Color ${i+1}`,
            hex: `#${Math.floor(Math.random()*16777215).toString(16).padStart(6, '0')}`,
            photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"],
            video: "video1.mp4"
        }))
    },
    {
        id: "fabric-006",
        name: "Rayon 17 kg 56\"+",
        category: "rayon",
        material: "100% Rayon",
        weight: "17 kg",
        width: "56 inches+",
        colors: ["#DC143C", "#4682B4", "#228B22", "#DAA520", "#8A2BE2"],
        price: "₹50-70 per meter",
        features: ["WIDE-WIDTH", "SMOOTH", "FLOWING", "PREMIUM"],
        description: "Wide-width rayon fabric with heavier weight for premium garments.",
        rating: 4.8,
        reviews: 145,
        availability: "In Stock",
        colorCount: 50,
        allColors: Array.from({length: 50}, (_, i) => ({
            id: `rayon17-color-${i+1}`,
            name: `Rayon 17kg Color ${i+1}`,
            hex: `#${Math.floor(Math.random()*16777215).toString(16).padStart(6, '0')}`,
            photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"],
            video: "video1.mp4"
        }))
    },
    {
        id: "fabric-007",
        name: "Rayon Slub 14kg 42\"+",
        category: "rayon",
        material: "100% Rayon Slub",
        weight: "14 kg",
        width: "42 inches+",
        colors: ["#B22222", "#4169E1", "#228B22", "#FF8C00", "#9932CC"],
        price: "₹45-65 per meter",
        features: ["TEXTURED", "UNIQUE", "BREATHABLE", "STYLISH"],
        description: "Textured rayon slub fabric with unique surface characteristics.",
        rating: 4.5,
        reviews: 98,
        availability: "In Stock",
        colorCount: 50,
        allColors: Array.from({length: 50}, (_, i) => ({
            id: `rayonslub-color-${i+1}`,
            name: `Rayon Slub Color ${i+1}`,
            hex: `#${Math.floor(Math.random()*16777215).toString(16).padStart(6, '0')}`,
            photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"],
            video: "video1.mp4"
        }))
    },
    {
        id: "fabric-008",
        name: "Rayon Wrinkle 17 kg 56\"+",
        category: "rayon",
        material: "100% Rayon Wrinkle",
        weight: "17 kg",
        width: "56 inches+",
        colors: ["#800020", "#191970", "#006400", "#FF6347", "#4B0082"],
        price: "₹55-75 per meter",
        features: ["WRINKLE-EFFECT", "WIDE-WIDTH", "UNIQUE", "PREMIUM"],
        description: "Specialty wrinkle-effect rayon fabric with distinctive texture.",
        rating: 4.4,
        reviews: 67,
        availability: "Limited Stock",
        colorCount: 50,
        allColors: Array.from({length: 50}, (_, i) => ({
            id: `rayonwrinkle-color-${i+1}`,
            name: `Rayon Wrinkle Color ${i+1}`,
            hex: `#${Math.floor(Math.random()*16777215).toString(16).padStart(6, '0')}`,
            photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"],
            video: "video1.mp4"
        }))
    },
    {
        id: "fabric-009",
        name: "Roman Silk 9.500 kg 43\"+",
        category: "silk",
        material: "Roman Silk",
        weight: "9.500 kg",
        width: "43 inches+",
        colors: ["#8B0000", "#000080", "#008000", "#FFD700", "#800080"],
        price: "₹80-120 per meter",
        features: ["LUXURIOUS", "SMOOTH", "ELEGANT", "PREMIUM"],
        description: "Premium Roman silk fabric with luxurious feel and elegant drape.",
        rating: 4.9,
        reviews: 234,
        availability: "In Stock",
        colorCount: 50,
        allColors: Array.from({length: 50}, (_, i) => ({
            id: `romansilk-color-${i+1}`,
            name: `Roman Silk Color ${i+1}`,
            hex: `#${Math.floor(Math.random()*16777215).toString(16).padStart(6, '0')}`,
            photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"],
            video: "video1.mp4"
        }))
    },
    {
        id: "fabric-010",
        name: "Gajji Silk 20 kg 56\"+",
        category: "silk",
        material: "Gajji Silk",
        weight: "20 kg",
        width: "56 inches+",
        colors: ["#B22222", "#4169E1", "#228B22", "#DAA520", "#8A2BE2"],
        price: "₹100-150 per meter",
        features: ["HEAVY-WEIGHT", "LUXURIOUS", "WIDE-WIDTH", "PREMIUM"],
        description: "Heavy-weight Gajji silk with exceptional quality and wide width.",
        rating: 5.0,
        reviews: 78,
        availability: "Premium Stock",
        colorCount: 50,
        allColors: Array.from({length: 50}, (_, i) => ({
            id: `gajjisilk-color-${i+1}`,
            name: `Gajji Silk Color ${i+1}`,
            hex: `#${Math.floor(Math.random()*16777215).toString(16).padStart(6, '0')}`,
            photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"],
            video: "video1.mp4"
        }))
    },
    {
        id: "fabric-011",
        name: "Cotton Lycra 21 kg 56\"+",
        category: "stretch",
        material: "Cotton Lycra Blend",
        weight: "21 kg",
        width: "56 inches+",
        colors: ["#DC143C", "#0000CD", "#008B00", "#FF8C00", "#9400D3"],
        price: "₹70-100 per meter",
        features: ["STRETCHY", "COMFORTABLE", "HEAVY-WEIGHT", "VERSATILE"],
        description: "Premium cotton lycra blend with excellent stretch and comfort.",
        rating: 4.7,
        reviews: 167,
        availability: "In Stock",
        colorCount: 50,
        allColors: Array.from({length: 50}, (_, i) => ({
            id: `cottonlycra-color-${i+1}`,
            name: `Cotton Lycra Color ${i+1}`,
            hex: `#${Math.floor(Math.random()*16777215).toString(16).padStart(6, '0')}`,
            photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"],
            video: "video1.mp4"
        }))
    }
);

// Current state management
let currentSection = 'home';
let currentFabric = null;
let currentColorIndex = 0;
let currentColorData = null;

// Company contact information
const companyInfo = {
    phone: '+919825887554',
    whatsapp: '919825887554',
    email: 'vishalpoddar1983@gmail.com'
};

// Performance optimization utilities
const throttle = (func, limit) => {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
};

const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

// WhatsApp integration functions
function createWhatsAppMessage(fabricName, colorName = '', colorHex = '') {
    let message = `Hello Poddar Creation, I am interested in your premium fabrics.`;
    
    if (fabricName) {
        message += ` I would like to inquire about "${fabricName}".`;
    }
    
    if (colorName && colorHex) {
        message += ` Specifically, I'm interested in the color "${colorName}" (${colorHex}).`;
    }
    
    message += ` Please provide detailed pricing, availability, and ordering information. Thank you!`;
    
    return encodeURIComponent(message);
}

function openWhatsApp(fabricName = '', colorName = '', colorHex = '') {
    const message = createWhatsAppMessage(fabricName, colorName, colorHex);
    const whatsappUrl = `https://wa.me/${companyInfo.whatsapp}?text=${message}`;
    window.open(whatsappUrl, '_blank');
}

// Section Navigation System with Maya theme animations
function navigateToSection(targetSection, fabricId = null) {
    const sections = document.querySelectorAll('.section-slide');
    const targetSectionEl = document.getElementById(targetSection);

    if (!targetSectionEl || currentSection === targetSection) return;

    // Store fabric ID for detail view
    if (fabricId) {
        currentFabric = fabricData.find(f => f.id === fabricId);
    }

    // INSTANT navigation - no animations, no delays, no previews
    sections.forEach(section => {
        section.classList.remove('active', 'prev');
        section.style.display = 'none'; // Completely hide all sections
    });

    // Show only the target section
    targetSectionEl.style.display = 'block';
    targetSectionEl.classList.add('active');

    // Load section-specific content
    if (targetSection === 'fabric-detail' && currentFabric) {
        loadFabricDetailContent();
    }

    currentSection = targetSection;

    // Trigger section animations
    initSectionAnimations(targetSection);

    // Update URL hash
    history.pushState(null, null, `#${targetSection}`);

    // Ensure page starts at top with no scrolling
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
}

// Load fabric detail content with Maya theme styling
function loadFabricDetailContent() {
    if (!currentFabric) return;

    // Update breadcrumb
    const breadcrumbFabric = document.getElementById('fabric-breadcrumb');
    breadcrumbFabric.textContent = currentFabric.name;

    // Update fabric preview with LARGER color bars
    const fabricPreview = document.getElementById('fabric-preview');
    const colorBars = currentFabric.colors.map(color => 
        `<div class="fabric-detail__color-bar" style="background-color: ${color}"></div>`
    ).join('');
    
    fabricPreview.innerHTML = `
        <div class="fabric-detail__color-bars">
            ${colorBars}
        </div>
    `;

    // Update fabric info with rating and availability
    const fabricInfo = document.getElementById('fabric-info');
    const featureTags = currentFabric.features.map(feature => 
        `<span class="feature-tag">${feature}</span>`
    ).join('');

    const stars = '★'.repeat(Math.floor(currentFabric.rating)) + '☆'.repeat(5 - Math.floor(currentFabric.rating));

    fabricInfo.innerHTML = `
        <h1>${currentFabric.name}</h1>
        <div class="fabric-rating" style="margin-bottom: 20px;">
            <span style="color: #FFD700; font-size: 18px;">${stars}</span>
            <span style="color: #999; margin-left: 10px;">${currentFabric.rating} (${currentFabric.reviews} reviews)</span>
        </div>
        <div class="fabric-availability" style="margin-bottom: 20px;">
            <span class="status status--success">${currentFabric.availability}</span>
        </div>
        <div class="fabric-detail__specs">
            <div class="fabric-spec">
                <div class="fabric-spec__label">MATERIAL</div>
                <div class="fabric-spec__value">${currentFabric.material}</div>
            </div>
            <div class="fabric-spec">
                <div class="fabric-spec__label">WEIGHT</div>
                <div class="fabric-spec__value">${currentFabric.weight}</div>
            </div>
            <div class="fabric-spec">
                <div class="fabric-spec__label">WIDTH</div>
                <div class="fabric-spec__value">${currentFabric.width}</div>
            </div>
            <div class="fabric-spec">
                <div class="fabric-spec__label">COLORS</div>
                <div class="fabric-spec__value">${currentFabric.colorCount} Colors</div>
            </div>
        </div>
        <div class="fabric-detail__price">${currentFabric.price}</div>
        <div class="fabric-detail__description">${currentFabric.description}</div>
        <div class="fabric-detail__features">
            ${featureTags}
        </div>
        <div class="fabric-actions" style="margin-top: 30px; display: flex; gap: 15px;">
            <button class="btn btn--primary" onclick="openWhatsApp('${currentFabric.name}')">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.700"/>
                </svg>
                WHATSAPP INQUIRY
            </button>
            <button class="btn btn--outline" onclick="navigateToSection('contact')">
                GET QUOTE
            </button>
        </div>
    `;

    // Load colors grid with LARGER color swatches
    loadColorsGrid();
}

// Load colors grid with 50+ colors - LARGER SWATCHES
function loadColorsGrid() {
    if (!currentFabric || !currentFabric.allColors) return;

    const colorsGrid = document.getElementById('colors-grid');
    const colorsHTML = currentFabric.allColors.map((color, index) => `
        <div class="color-card animate-fade-up" data-delay="${index * 50}" onclick="openColorModal('${color.id}')">
            <div class="color-card__preview">
                <div class="color-card__media-grid">
                    <div class="color-card__media-item" style="background-color: ${color.hex}"></div>
                    <div class="color-card__media-item" style="background-color: ${adjustColorBrightness(color.hex, -20)}"></div>
                    <div class="color-card__media-item" style="background-color: ${adjustColorBrightness(color.hex, 20)}"></div>
                    <div class="color-card__media-item color-card__media-item--video" style="background-color: ${color.hex}"></div>
                </div>
            </div>
            <div class="color-card__content">
                <div class="color-card__name">${color.name}</div>
                <div class="color-card__code">${color.hex}</div>
                <div class="color-card__media-count">3 PHOTOS • 1 VIDEO</div>
            </div>
        </div>
    `).join('');

    colorsGrid.innerHTML = colorsHTML;

    // Animate colors grid appearance
    setTimeout(() => {
        const colorCards = colorsGrid.querySelectorAll('.color-card');
        colorCards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('visible');
            }, index * 50);
        });
    }, 100);
}

// Utility function to adjust color brightness
function adjustColorBrightness(hex, percent) {
    const num = parseInt(hex.replace("#", ""), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) + amt;
    const G = (num >> 8 & 0x00FF) + amt;
    const B = (num & 0x0000FF) + amt;
    return "#" + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
        (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
        (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1);
}

// Open color detail modal with fullscreen gallery
function openColorModal(colorId) {
    const color = currentFabric.allColors.find(c => c.id === colorId);
    if (!color) return;

    currentColorData = color;
    currentColorIndex = 0;

    const modal = document.getElementById('color-modal');
    
    // Populate gallery
    loadColorGallery();
    
    // Populate color info
    loadColorInfo();
    
    // Show modal with Maya theme animation
    modal.classList.remove('hidden');
    setTimeout(() => {
        modal.classList.add('visible');
    }, 10);
    
    // Disable body scroll
    document.body.style.overflow = 'hidden';
}

// Load color gallery (3 photos + 1 video)
function loadColorGallery() {
    if (!currentColorData) return;

    const galleryMain = document.getElementById('gallery-main');
    const galleryDots = document.getElementById('gallery-dots');
    
    const mediaItems = [
        ...currentColorData.photos.map((photo, index) => ({
            type: 'photo',
            src: `https://via.placeholder.com/600x400/${currentColorData.hex.substring(1)}/ffffff?text=Photo+${index + 1}`,
            alt: `${currentColorData.name} Photo ${index + 1}`
        })),
        {
            type: 'video',
            src: `https://via.placeholder.com/600x400/${currentColorData.hex.substring(1)}/ffffff?text=Video+Sample`,
            alt: `${currentColorData.name} Video`
        }
    ];

    // Load current media
    const currentMedia = mediaItems[currentColorIndex];
    if (currentMedia.type === 'photo') {
        galleryMain.innerHTML = `<img src="${currentMedia.src}" alt="${currentMedia.alt}" style="max-width: 100%; max-height: 100%; object-fit: contain; display: block;">`;
    } else {
        // For demo purposes, use an image placeholder for video
        galleryMain.innerHTML = `<img src="${currentMedia.src}" alt="${currentMedia.alt}" style="max-width: 100%; max-height: 100%; object-fit: contain; display: block;">`;
    }

    // Load dots navigation
    const dotsHTML = mediaItems.map((_, index) => `
        <div class="gallery-dot ${index === currentColorIndex ? 'active' : ''}" onclick="goToMedia(${index})"></div>
    `).join('');
    
    galleryDots.innerHTML = dotsHTML;
}

// Load color info panel with WhatsApp integration
function loadColorInfo() {
    if (!currentColorData) return;

    const colorInfo = document.getElementById('color-modal-info');
    colorInfo.innerHTML = `
        <h2>${currentColorData.name}</h2>
        <div class="color-code">${currentColorData.hex}</div>
        <div class="color-swatch-large" style="background-color: ${currentColorData.hex}"></div>
        <div class="media-info">
            <h3>MEDIA GALLERY</h3>
            <div class="media-count">
                <p>3 High-resolution photos</p>
                <p>1 Detailed video showcase</p>
                <p>Color-accurate representations</p>
            </div>
        </div>
        <div class="color-actions" style="display: flex; flex-direction: column; gap: 15px; margin-top: 30px;">
            <button class="btn btn--primary btn--full-width whatsapp-btn" onclick="requestColorViaWhatsApp('${currentColorData.id}')">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.700"/>
                </svg>
                WHATSAPP THIS COLOR
            </button>
            <button class="btn btn--outline btn--full-width" onclick="requestColorQuote('${currentColorData.id}')">
                REQUEST QUOTE
            </button>
        </div>
    `;
}

// Gallery navigation functions
function goToMedia(index) {
    if (!currentColorData) return;
    
    const mediaCount = currentColorData.photos.length + 1; // +1 for video
    currentColorIndex = Math.max(0, Math.min(index, mediaCount - 1));
    
    loadColorGallery();
}

function previousMedia() {
    const mediaCount = currentColorData.photos.length + 1;
    currentColorIndex = currentColorIndex === 0 ? mediaCount - 1 : currentColorIndex - 1;
    loadColorGallery();
}

function nextMedia() {
    const mediaCount = currentColorData.photos.length + 1;
    currentColorIndex = currentColorIndex === mediaCount - 1 ? 0 : currentColorIndex + 1;
    loadColorGallery();
}

// Close color modal
function closeColorModal() {
    const modal = document.getElementById('color-modal');
    modal.classList.remove('visible');
    setTimeout(() => {
        modal.classList.add('hidden');
        currentColorData = null;
        currentColorIndex = 0;
    }, 400);
    
    // Re-enable body scroll
    document.body.style.overflow = '';
}

// Request quote for specific color via WhatsApp
function requestColorViaWhatsApp(colorId) {
    const color = currentFabric.allColors.find(c => c.id === colorId);
    if (color) {
        openWhatsApp(currentFabric.name, color.name, color.hex);
    }
    closeColorModal();
}

// Request quote for specific color via contact form
function requestColorQuote(colorId) {
    const color = currentFabric.allColors.find(c => c.id === colorId);
    closeColorModal();
    navigateToSection('contact');
    
    setTimeout(() => {
        const fabricTypeSelect = document.getElementById('fabric-type');
        const messageTextarea = document.getElementById('message');
        
        if (fabricTypeSelect && currentFabric) {
            fabricTypeSelect.value = currentFabric.category;
        }
        
        if (messageTextarea && color) {
            messageTextarea.value = `I'm interested in ${currentFabric.name} in ${color.name} (${color.hex}). Please provide detailed pricing and availability information.`;
        }
    }, 800);
}

// Create product card HTML - ENTIRE CARD CLICKABLE
function createProductCard(fabric) {
    const colorSwatches = fabric.colors.map(color => 
        `<div class="color-swatch" style="background-color: ${color}"></div>`
    ).join('');

    const featureTags = fabric.features.map(feature => 
        `<span class="feature-tag">${feature}</span>`
    ).join('');

    const colorBars = fabric.colors.map(color => 
        `<div class="product-card__color" style="background-color: ${color}"></div>`
    ).join('');

    const stars = '★'.repeat(Math.floor(fabric.rating)) + '☆'.repeat(5 - Math.floor(fabric.rating));

    return `
        <div class="product-card" data-category="${fabric.category}" onclick="navigateToSection('fabric-detail', '${fabric.id}')">
            <div class="product-card__image">
                <div class="product-card__colors">
                    ${colorBars}
                </div>
            </div>
            <div class="product-card__content">
                <h3 class="product-card__title">${fabric.name}</h3>
                <p class="product-card__material">${fabric.material} • ${fabric.weight}</p>
                <div class="product-card__rating" style="margin-bottom: 10px;">
                    <span style="color: #FFD700; font-size: 14px;">${stars}</span>
                    <span style="color: #999; margin-left: 5px; font-size: 12px;">${fabric.rating}</span>
                </div>
                <div class="product-card__price">${fabric.price}</div>
                <div class="product-card__features">
                    ${featureTags}
                </div>
                <div class="product-card__meta" style="display: flex; justify-content: space-between; align-items: center; margin-top: 15px;">
                    <div class="product-card__swatches">
                        ${colorSwatches}
                    </div>
                    <div class="product-card__colors-count" style="font-size: 11px; color: #999; text-transform: uppercase; letter-spacing: 0.05em;">
                        ${fabric.colorCount} COLORS
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Populate catalog - Show all by default
function populateCatalog() {
    const catalogGrid = document.getElementById('catalog-grid');
    const productsHTML = fabricData.map(fabric => createProductCard(fabric)).join('');
    catalogGrid.innerHTML = productsHTML;
    
    // Show all product cards by default with staggered animation
    setTimeout(() => {
        const productCards = catalogGrid.querySelectorAll('.product-card');
        productCards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('visible');
            }, index * 100);
        });
    }, 200);
}

// Product filtering
function initProductFiltering() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const catalogGrid = document.getElementById('catalog-grid');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            
            // Update active filter button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const productCards = catalogGrid.querySelectorAll('.product-card');
            
            // Hide all cards first
            productCards.forEach(card => {
                card.classList.remove('visible');
            });
            
            setTimeout(() => {
                productCards.forEach((card, index) => {
                    const category = card.getAttribute('data-category');
                    const shouldShow = filter === 'all' || category === filter;
                    
                    if (shouldShow) {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.classList.add('visible');
                        }, index * 50);
                    } else {
                        card.style.display = 'none';
                    }
                });
            }, 150);
        });
    });
}

// Enhanced Contact form functionality with WhatsApp integration
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            if (!validateForm(contactForm)) {
                showNotification('PLEASE FILL OUT ALL REQUIRED FIELDS CORRECTLY.', 'error');
                return;
            }
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const phone = formData.get('phone');
            const fabricType = formData.get('fabric-type');
            const message = formData.get('message');
            
            // Create WhatsApp message with form data
            let whatsappMessage = `Hello Poddar Creation,\n\nI am ${name} and I am interested in your premium fabrics.\n\n`;
            
            if (fabricType) {
                whatsappMessage += `Fabric Type: ${fabricType}\n`;
            }
            
            if (message) {
                whatsappMessage += `Message: ${message}\n`;
            }
            
            whatsappMessage += `\nMy contact details:\nEmail: ${email}\n`;
            
            if (phone) {
                whatsappMessage += `Phone: ${phone}\n`;
            }
            
            whatsappMessage += `\nPlease get back to me with pricing and availability information. Thank you!`;
            
            // Open WhatsApp with the message
            const encodedMessage = encodeURIComponent(whatsappMessage);
            const whatsappUrl = `https://wa.me/${companyInfo.whatsapp}?text=${encodedMessage}`;
            window.open(whatsappUrl, '_blank');
            
            showNotification('REDIRECTING TO WHATSAPP! YOUR INQUIRY WILL BE SENT DIRECTLY.', 'success');
            contactForm.reset();
        });
    }
}

function validateForm(form) {
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        const value = field.value.trim();
        
        if (!value) {
            isValid = false;
            field.style.borderColor = '#DC143C';
        } else if (field.type === 'email' && !isValidEmail(value)) {
            isValid = false;
            field.style.borderColor = '#DC143C';
        } else {
            field.style.borderColor = '#e5e5e5';
        }
    });
    
    return isValid;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Scroll progress bar
function initScrollProgress() {
    const progressBar = document.getElementById('scroll-progress-bar');
    
    const updateProgress = throttle(() => {
        const scrollTop = window.pageYOffset;
        const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (scrollTop / documentHeight) * 100;
        
        progressBar.style.width = scrolled + '%';
    }, 10);
    
    window.addEventListener('scroll', updateProgress);
}

// Header scroll effects
function initHeaderScroll() {
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;
    let ticking = false;
    
    const updateHeader = () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScrollY = currentScrollY;
        ticking = false;
    };
    
    const requestTick = () => {
        if (!ticking) {
            requestAnimationFrame(updateHeader);
            ticking = true;
        }
    };
    
    window.addEventListener('scroll', requestTick);
}

// Parallax effect for hero
function initParallaxEffect() {
    const parallaxText = document.querySelector('.hero__parallax-text');
    
    const updateParallax = throttle(() => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        if (parallaxText && currentSection === 'home') {
            parallaxText.style.transform = `translate(-50%, calc(-50% + ${rate}px))`;
        }
    }, 16);
    
    window.addEventListener('scroll', updateParallax);
}

// Section-specific animations
function initSectionAnimations(sectionId) {
    const section = document.getElementById(sectionId);
    const animatedElements = section.querySelectorAll('.animate-fade-up, .animate-stagger');
    
    animatedElements.forEach((el, index) => {
        el.classList.remove('visible');
        const delay = el.getAttribute('data-delay') || (index * 100);
        
        setTimeout(() => {
            el.classList.add('visible');
        }, parseInt(delay) + 200);
    });
}

// Mobile menu functionality
function initMobileMenu() {
    const navToggle = document.getElementById('nav-toggle');
    const mobileOverlay = document.getElementById('mobile-menu-overlay');
    const mobileClose = document.getElementById('mobile-menu-close');
    const mobileLinks = document.querySelectorAll('.mobile-menu-link');
    
    const openMenu = () => {
        mobileOverlay.classList.add('active');
        navToggle.classList.add('active');
        document.body.style.overflow = 'hidden';
    };
    
    const closeMenu = () => {
        mobileOverlay.classList.remove('active');
        navToggle.classList.remove('active');
        document.body.style.overflow = '';
    };
    
    if (navToggle) {
        navToggle.addEventListener('click', openMenu);
    }
    
    if (mobileClose) {
        mobileClose.addEventListener('click', closeMenu);
    }
    
    mobileLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            closeMenu();
            setTimeout(() => {
                navigateToSection(targetId);
            }, 300);
        });
    });
    
    mobileOverlay.addEventListener('click', (e) => {
        if (e.target === mobileOverlay) {
            closeMenu();
        }
    });
}

// Navigation functionality
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav__link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            navigateToSection(targetId);
        });
    });
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 30px;
        right: 30px;
        background: #fff;
        border: 2px solid #000;
        padding: 20px 25px;
        z-index: 4000;
        max-width: 400px;
        transform: translateX(100%);
        transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        font-size: 12px;
    `;
    
    if (type === 'success') {
        notification.style.borderColor = '#25D366';
        notification.style.color = '#25D366';
    } else if (type === 'error') {
        notification.style.borderColor = '#DC143C';
        notification.style.color = '#DC143C';
    }
    
    notification.innerHTML = `<p style="margin: 0;">${message}</p>`;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 400);
    }, 4000);
}

// Keyboard navigation for gallery
function initKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        const modal = document.getElementById('color-modal');
        if (modal.classList.contains('visible')) {
            switch(e.key) {
                case 'ArrowLeft':
                    e.preventDefault();
                    previousMedia();
                    break;
                case 'ArrowRight':
                    e.preventDefault();
                    nextMedia();
                    break;
                case 'Escape':
                    e.preventDefault();
                    closeColorModal();
                    break;
            }
        }
    });
}

// Initialize all functionality
document.addEventListener('DOMContentLoaded', () => {
    // Core functionality
    populateCatalog();
    initScrollProgress();
    initHeaderScroll();
    initParallaxEffect();
    initMobileMenu();
    initNavigation();
    initProductFiltering();
    initContactForm();
    initKeyboardNavigation();
    
    // Initialize first section animations
    initSectionAnimations('home');
    
    // Handle browser navigation
    window.addEventListener('popstate', () => {
        const hash = window.location.hash.substring(1) || 'home';
        if (hash !== currentSection) {
            navigateToSection(hash);
        }
    });
    
    // Performance optimization
    if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
            console.log('🎨 FINAL PERFECTED Maya Theme - All Critical Fixes Applied!');
            console.log('✅ Large color charts implemented');
            console.log('✅ Entire fabric cards clickable');
            console.log('✅ WhatsApp integration fixed and working');
            console.log('✅ Enhanced contact system with working links');
        });
    }
});

// Global functions for HTML onclick handlers
window.navigateToSection = navigateToSection;
window.openColorModal = openColorModal;
window.closeColorModal = closeColorModal;
window.goToMedia = goToMedia;
window.previousMedia = previousMedia;
window.nextMedia = nextMedia;
window.requestColorQuote = requestColorQuote;
window.requestColorViaWhatsApp = requestColorViaWhatsApp;
window.openWhatsApp = openWhatsApp;