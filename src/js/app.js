export default function getHelth(obj) {
  if (obj.health < 15) {
    return 'critical';
  } if (obj.health >= 15 && obj.health <= 50) {
    return 'wounded';
  }
  return 'healthy';
}
