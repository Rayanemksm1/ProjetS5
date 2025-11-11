
import java.util.*;

public class Jedi extends Personnage {

    public Jedi(String nom, int force) {
        super(nom, force);
    }

    // 1.4 - Générer une liste de Jedis
    public static List<Jedi> genererListJedi(int n) {
        List<Jedi> list = new ArrayList<>();
        Random rand = new Random();
        for (int i = 1; i <= n; i++) {
            int force = 10 + rand.nextInt(n - 9); // entre 10 et n
            list.add(new Jedi("Jedi" + i, force));
        }
        return list;
    }

    // 1.5 - Trier manuellement les jedis (méthode "maison")
    public static List<Jedi> trier(List<Jedi> list) {
        List<Jedi> sorted = new ArrayList<>(list);
        sorted.sort(Comparator.comparingInt(Jedi::getForce));
        return sorted;
    }

    // 1.10 - Générer un dictionnaire de Jedis
    public static Map<String, Jedi> genererMapJedi(int n) {
        Map<String, Jedi> map = new HashMap<>();
        Random rand = new Random();
        for (int i = 1; i <= n; i++) {
            int num = 1 + rand.nextInt(1000); // nombre aléatoire pour le nom
            int force = 10 + rand.nextInt(90);
            map.put("Jedi" + num, new Jedi("Jedi" + num, force));
        }
        return map;
    }

    // 1.12 - Retourner un ensemble des jedis avec nom "Jedi<k>" où k est premier
    public static Set<Jedi> dictVersEnsemblePair(Map<String, Jedi> mapJedi) {
        Set<Jedi> set = new HashSet<>();
        for (String key : mapJedi.keySet()) {
            try {
                int num = Integer.parseInt(key.replace("Jedi", ""));
                if (estPremier(num)) {
                    set.add(mapJedi.get(key));
                }
            } catch (NumberFormatException ignored) {}
        }
        return set;
    }

    private static boolean estPremier(int n) {
        if (n < 2) return false;
        for (int i = 2; i <= Math.sqrt(n); i++) {
            if (n % i == 0) return false;
        }
        return true;
    }
}

