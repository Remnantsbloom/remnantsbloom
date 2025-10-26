#!/bin/bash
cd /home/ubuntu/remnantsbloom/product_images
for img in *.png; do
  if [ -f "$img" ]; then
    echo "Uploading $img..."
    manus-upload-file "$img"
  fi
done
