git diff-index HEAD | grep ${1}.md && git add -f ${1}.md && git commit -m "update ${1}.md" || echo "No changes to commit"
