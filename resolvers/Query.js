module.exports = {
  totalPhotos: () => photos.length,
  allPhotos: (parent, args) => {
    photos.filter((p) => new Date(p.created) >= new Date(args.after));
  },
};
