$src = "C:\Users\ASUS\Downloads\tanu05\sh0kh_extracted\sh0kh"
$img = "C:\Users\ASUS\Downloads\tanu05\public\assets\images"

# Hero
Copy-Item "$src\Screenshot 2026-11-06 133757.png" "$img\hero\hero-cover.jpg" -Force

# Gallery
Copy-Item "$src\Screenshot 2026-11-06 133826.png" "$img\gallery\memory1.jpg" -Force
Copy-Item "$src\Screenshot 2026-11-06 133854.png" "$img\gallery\memory2.jpg" -Force
Copy-Item "$src\WhatsApp Image 2026-11-06 at 1.17.05 PM.jpeg" "$img\gallery\memory3.jpg" -Force
Copy-Item "$src\WhatsApp Image 2026-11-06 at 1.19.15 PM.jpeg" "$img\gallery\memory4.jpg" -Force
Copy-Item "$src\Screenshot 2026-11-06 133911.png" "$img\gallery\memory5.jpg" -Force
Copy-Item "$src\Screenshot 2026-11-06 133949.png" "$img\gallery\memory6.jpg" -Force

# Wishlist
Copy-Item "$src\Screenshot 2026-11-06 133911.png" "$img\wishlist\sunflower.jpg" -Force
Copy-Item "$src\Screenshot 2026-11-06 133924.png" "$img\wishlist\mehendi-hand.jpg" -Force
Copy-Item "$src\Screenshot 2026-11-06 133936.png" "$img\wishlist\tsc-dolonchapa.jpg" -Force
Copy-Item "$src\Screenshot 2026-11-06 133949.png" "$img\wishlist\boat-ride.jpg" -Force
Copy-Item "$src\Screenshot 2026-11-06 133826.png" "$img\wishlist\memory-extra.jpg" -Force

# Secret room
Copy-Item "$src\WhatsApp Image 2026-11-06 at 1.17.05 PM.jpeg" "$img\secret\hidden-photo.jpg" -Force

# Also copy originals from root
Copy-Item "C:\Users\ASUS\Downloads\tanu05\hero.jpg" "$img\hero\hero-orig.jpg" -Force
Copy-Item "C:\Users\ASUS\Downloads\tanu05\memory1.jpg" "$img\gallery\photo-orig1.jpg" -Force
Copy-Item "C:\Users\ASUS\Downloads\tanu05\memory2.png" "$img\gallery\photo-orig2.jpg" -Force
Copy-Item "C:\Users\ASUS\Downloads\tanu05\memory3.jpg" "$img\gallery\photo-orig3.jpg" -Force
Copy-Item "C:\Users\ASUS\Downloads\tanu05\memory4.jpg" "$img\gallery\photo-orig4.jpg" -Force
Copy-Item "C:\Users\ASUS\Downloads\tanu05\memory5.jpg" "$img\gallery\photo-orig5.jpg" -Force
Copy-Item "C:\Users\ASUS\Downloads\tanu05\extra.jpg" "$img\gallery\photo-extra.jpg" -Force
Copy-Item "C:\Users\ASUS\Downloads\tanu05\final.jpg" "$img\hero\hero-final.jpg" -Force

Write-Host "All images copied successfully!"
