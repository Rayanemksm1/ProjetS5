
import java.util.Comparator;

public class JediComparator implements Comparator<Jedi> {
    @Override
    public int compare(Jedi o1, Jedi o2) {
        return Integer.compare(o1.getForce(), o2.getForce());
    }
}

