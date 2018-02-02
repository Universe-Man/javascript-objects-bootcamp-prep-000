var playlist = new Object({ Artist: 'Song' })

function updatePlaylist(playlist, Artist, Song) {
  playlist[Artist] = Song
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
<<<<<<< HEAD
  delete playlist[artistName];
=======
  delete playlist.artistName;
>>>>>>> 0cbe5a8f0893c4d02f41eaea33a7a298c35f8de1
  return playlist
}