# To hack / fix the problem with the incorrect assets folder
#   we copy the icons folder to the storybook-static folder after the build

# Variables
PURPLE='\033[0;35m'
GREEN='\033[0;32m'
NOCOLOR='\033[0m'
ORIGINAL_LOCATION=src/assets/
DIST_DESTINATION_LOCATION=public/assets/icons
echo "📸 ${PURPLE}Start copying the icons folder...${NOCOLOR}"

cp -R ${ORIGINAL_LOCATION} ${DIST_DESTINATION_LOCATION}

# Output success message
echo "🎉 ${GREEN}Successfully copied the icons folder!${NOCOLOR}"
