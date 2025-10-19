# Anthony Matignon Protfolio

This repository holds the code for the website [https://amatignon.fr](https://amatignon.fr).

Everything is open source. Use it as you want 😅



## FFMPEG Command for image optimisation

To be able to have a good set of assets. You must build the image in a good format and size 

Run this command for your images to have a good size 

For .webp format
```
ffmpeg -i <input_file> -vf "scale=1200:-1:flags=lanczos" -lossless 1  <output_file>.webp
```

For .avif format
```
ffmpeg -i <input_file> -vf "scale=1200:-1:flags=lanczos" -lossless 1  <output_file>.avif
```
