# This script runs after building the sandbox template
# and makes sure the Next.js app is (1) running and (2) the `/` page is compiled
# and helps streams the stdErr during sandbox deployment

mkdir -p /home/user/.next
chmod -R a+w /home/user/.next
cd /home/user
echo "🔨 Building…"
npx next build
